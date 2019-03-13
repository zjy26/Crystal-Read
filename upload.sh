#!/bin/bash
atool-build
scp ./dist/* root@106.15.227.154:/docker/zhiliao/html
