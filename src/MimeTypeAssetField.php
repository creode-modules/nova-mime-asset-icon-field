<?php

namespace Creode\MimeTypeAssetField;

use Laravel\Nova\Fields\Field;
use Laravel\Nova\Http\Requests\NovaRequest;

class MimeTypeAssetField extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'MimeTypeAssetField';


    // Replace '/' with '-' in field value
    public function resolveAttribute($resource, $attribute = null)
    {
        $value = parent::resolveAttribute($resource, $attribute);

        return str_replace(['/', '.'], '-', $value);
    }

}
