@php
try {
$ssr = Http::post('http://localhost:8000/render', $page)->throw()->json();
} catch (Exception $e) {
$ssr = null;
}
@endphp
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="font-sans antialiased">

<head>
    <meta charset="utf-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ mix('/frontend/css/app.css') }}" rel="stylesheet" />
    @foreach($ssr['head'] ?? [] as $element)
    {!! $element !!}
    @endforeach
</head>

<body>
    <div>
        @if ($ssr)
        {!! $ssr['body'] !!}
        @else
        @inertia
        @endif
    </div>
    <script src="{{ mix('/frontend/js/app.js') }}" defer></script>
</body>

</html>
