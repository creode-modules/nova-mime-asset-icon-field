<?php

namespace Creode\MimeTypeAssetField;

use Creode\LaravelMimeTypeIcons\Services\LaravelMimeTypeIconsService;
use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Nova;

class FieldServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Nova::serving(function () {
            Nova::script('MimeTypeAssetField', __DIR__.'/../dist/js/field.js');
        });

        $this->publishConfig();
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {

    }

    public function publishConfig()
    {

        $this->publishes([
            __DIR__ . '/../config/nova-mime-type-icon.php' => config_path('nova-mime-type-icon.php'),
        ], 'nova-mime-type-icon-config');
    }
}
