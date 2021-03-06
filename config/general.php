<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see craft\config\GeneralConfig.
 */

return [
    // Global settings
    '*' => [
        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 0,

        // Enable CSRF Protection (recommended)
        'enableCsrfProtection' => true,

        // Whether generated URLs should omit "index.php"
        'omitScriptNameInUrls' => true,

        // Control Panel trigger word
        'cpTrigger' => 'admin',

        'smallbreakpoint' => '1400',

        'breakpoints' => [
                'small' => '640',
                'medium' => '1024',
                'large' => '1440',
                'xlarge' => '1440',
                'xxlarge' => '1440',
        ],

        'breakpointsContained' => [
                'small' => '640',
                'medium' => '1024',
                'large' => '1200',
                'xlarge' => '1200',
                'xxlarge' => '1200',
        ],

        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => getenv('SECURITY_KEY'),

        'enableTemplateCaching' => false,
        
        'siteUrl'             => getenv('SITE_URL') ?: '@web',

        // Set the environmental variables
        'staticAssetsVersion' => 5,
    ],

    // Dev environment settings
    'dev' => [

        // Dev Mode (see https://craftcms.com/support/dev-mode)
        'devMode' => true,
        'allowUpdates' => true,
        'enableTemplateCaching' => false,
        // Set the environmental variables
        'staticAssetsVersion' => time(),
    ],

    // Staging environment settings
    'staging' => [

        'devMode' => false,
        'enableTemplateCaching' => true,
        'allowUpdates' => false,
        // Set the environmental variables
         'staticAssetsVersion' => time(),
    ],

    // Production environment settings
    'production' => [
        'devMode' => false,
        'enableTemplateCaching' => true,
        'allowUpdates' => false,
    ],
];
