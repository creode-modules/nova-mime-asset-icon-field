<?php

namespace Creode\MimeTypeAssetField;

use Creode\LaravelMimeTypeIcons\Services\LaravelMimeTypeIconsService;
use Laravel\Nova\Fields\Field;

class MimeTypeAssetField extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'MimeTypeAssetField';

    public function iconStyle($iconStyle = 'square-o')
    {
        return $this->withMeta(['iconStyle' => $iconStyle]);
    }

    public function resolveAttribute($resource, $attribute = null)
    {
        $value = parent::resolveAttribute($resource, $attribute);

        return LaravelMimeTypeIconsService::getIcon($value);
    }

}
