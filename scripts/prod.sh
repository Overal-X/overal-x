#! /bin/bash

set -e

yarn build
yarn start -- -p 8000
