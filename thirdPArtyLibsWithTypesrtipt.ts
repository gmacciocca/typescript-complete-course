/*
    1) To install type definitions for jquery use:
       npm install --save-dev @types/jquery


    2) Another older clunkier way to install typings for JQUERY is:
       npm install typings
       ./node_modules/typings/dist/bin.js install dt~jquery --global --save
       // the "dt~" part (above) instructs typings to get the definition file from definitelytyped
*/

import "jQuery"; // <== there is an entry for "jQuery" in the SystemJS configuration in index.html

$("#app").css({ "background-color": "pink" });
