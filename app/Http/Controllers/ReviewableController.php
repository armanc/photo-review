<?php

namespace App\Http\Controllers;

use App\Models\Conclusion;
use App\Models\Review;
use App\Models\Reviewable;
use App\Models\ReviewableFile;
use App\Services\ReviewableService;
use App\Services\ReviewerService;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;

class ReviewableController
{
    protected const INFOBOX_VERSION = 'v1.0.0';

    public function random(ReviewableService $reviewables, ReviewerService $reviewer, Request $request)
    {
        $reviewable = $reviewables->random();
        $reviewable->increment('view_count');

        $seenInfobox = $request->cookie('seen_infobox') === static::INFOBOX_VERSION;
        Cookie::queue(
            Cookie::forever('seen_infobox', static::INFOBOX_VERSION)
        );

        return view('random', [
            'file' => $reviewable->file,
            'exif' => $reviewable->file->getData(),
            'reviewedByCurrentUser' => Review::distinct()
                ->where('reviewer_id', $reviewer->getCurrentToken())
                ->reviewed()
                ->count('file'),
            'reviewableCount' => Reviewable::count(),
            'seenInfobox' => $seenInfobox,
        ]);
    }

    public function index()
    {
        // TODO: paginate, ja vajadzēs. un vrb filtrēt pēc kkā
        $reviewCounts = Review::groupBy('file')
            ->select(
                DB::raw('count(*) as review_count'),
                'file',
            )
            ->pluck('review_count', 'file');

        return view('reviewables', [
            'reviewables' => Reviewable::orderBy('path')->get(),
            'reviewCounts' => $reviewCounts,
        ]);
    }

    public function show(string $path)
    {
        $reviewable = new ReviewableFile($path);

        return view('reviewable', [
            'reviewable' => $reviewable,
            'reviews' => Review::where('file', $path)->get(),
        ]);
    }
}
