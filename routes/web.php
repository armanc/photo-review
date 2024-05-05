<?php

use App\Http\Controllers\ReviewableController;
use App\Http\Controllers\ReviewController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ReviewableController::class, 'random'])->name('reviewables.random');
Route::get('reviewables', [ReviewableController::class, 'index']);
Route::get('reviewables/{path}', [ReviewableController::class, 'show']);

Route::get('reviews', [ReviewController::class, 'index']);
Route::post('reviews', [ReviewController::class, 'store'])->name('reviews.store');
