// Copyright (c) HashiCorp, Inc
// Licensed under the Mozilla Public License 2.0

declare module 'child_process' {
    interface SpawnOptions  {
        signal?: AbortSignal;
    }
}
