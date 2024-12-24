#!/usr/bin/env bash
# wait-for-it.sh

set -e

TIMEOUT=15
HOST=$1
shift
CMD="$@"

until nc -z $HOST 27017; do
  echo "Waiting for MongoDB at $HOST:27017..."
  sleep 1
  TIMEOUT=$((TIMEOUT - 1))
  if [ $TIMEOUT -eq 0 ]; then
    echo "Timed out waiting for MongoDB."
    exit 1
  fi
done

exec $CMD
