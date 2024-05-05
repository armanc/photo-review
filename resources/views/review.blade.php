@extends('layout')

@section('content')
<img src="{{$file->url}}">

<form method=post>
    @csrf
    <input type=hidden name=file value="{{$file->path}}">

    <label>
        Ko aizdomīgu redzi?
        <textarea name=review></textarea>
    </label>

    <details>
        <summary>Bilde ir nekvalitatīva vai cita problēma?</summary>
        <textarea name=problem></textarea>
    </details>

    <button type=submit>Iesniegt</button>
</form>
@endsection