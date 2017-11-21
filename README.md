## Push, Preload Examples for Glimmer

This repo allows one to compare the different approaches for fetching Glimmer binary GBX data. 

Made with _kindness_ in California. 🏄

## Installation

1. Install yarn
    * https://yarnpkg.com/en/docs/install
2. Install Yarn Dependencies
    * yarn install
3. Run Locally
    * yarn run start
4. Compare and Contrast
    * http://localhost:5001/element/index.html
      - Uses a <link rel='preload'> element to indicate the user-agent it should request the resource before fetching via JS.
    * http://localhost:5001/header/index.html
      - Uses Link: <$asset>; rel=preload; as=fetch header instead of an element.
      - Note that Chrome 64.0.3271.0 will not reconsile this resource and retrieves it twice.
    * https://localhost:5000/push
      - Works as expected.
