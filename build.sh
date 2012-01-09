#!/bin/bash -e

cd PushDialer
zip -qr -9 -x "*.DS_Store" -X ../PushDialer.xpi .
cd ..
