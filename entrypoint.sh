#!/bin/sh

# Replace env vars in JavaScript files
echo "Replacing env vars in JS"
for file in `find .next/static -type f` ;
do
    echo "Processing $file ...";

    # Use the existing JS file as template
    if [ ! -f $file.tmpl.js ]; then
        cp $file $file.tmpl.js
    fi

    envsubst "$ENV_VARIABLES" < $file.tmpl.js > $file

    rm -f $file.tmpl.js
done

echo "Starting node process"
npm run docker:start