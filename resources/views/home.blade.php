<html>

<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <title>{{ config('app.name') }}</title>
    <link rel="icon" type="image/png" href="/images/icon.png" />
</head>

<div id="app"></div>
<script src="{{ mix('js/app.js') }}" defer></script>

</html>
