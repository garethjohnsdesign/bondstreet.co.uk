<?php

return [

      'useForCpThumbs' => true,

      'transformer' => 'imgix',

      'imagerUrl' => 'http://storage.googleapis.com/bond-street/',

      // Enables Imgix integration
      'imgixEnabled' => true,
      

      'imgixConfig' => [
          'default' => [
              'domains' => ['bond-street.imgix.net'],
              'useHttps' => true,
              'signKey' => '',
              'sourceIsWebProxy' => false,
              'useCloudSourcePath' => true,
              'shardStrategy' => 'cycle',
              'getExternalImageDimensions' => true,
              'defaultParams' => ['auto'=>'compress,format','fm'=>'jpg', 'q'=>45, 'fp-debug'=>false, 'blur'=>0, 'ch'=>'dpr', 'cs'=>'tinysrgb'],
              'apiKey' => '',
              'excludeFromPurge' => false,
          ]
      ],
        
      // Enables the use of https for image urls
      'imgixUseHttps' => true,
      
      // Sign key (also called token). This is needed for all web proxy sources. And a good idea in general.
      // You find this on the details page for your source, click the "Show token" button.
//       'imgixSignKey' => '',
      
      // Imager needs to know whether the source is a web proxy or not. 
      'imgixSourceIsWebProxy' => false,
      
      // When using multiple domains for one source, this decides what sharing strategy Imgix will use.
      'imgixShardStrategy' => 'cycle',
      
      // When transforming external images, Imager might have to download the external file to be
      // able to figure out what the size of the transformed file is. Disable for even better performance.
      'imgixGetExternalImageDimensions' => true,

      'storages' => ['gcs'],
      'storageConfig' => [
          'gcs' => [
              'keyFile' => '/assets/key/natural-nimbus-235813-b4926ee8d86b.json',
              'bucket' => 'bond-street',
              'folder' => '',
          ]
            
      ]
 
];