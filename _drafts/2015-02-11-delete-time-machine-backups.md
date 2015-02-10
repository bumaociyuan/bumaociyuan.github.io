---
layout: post
title: "delete time machine backups"
description: ""
category: mac
tags: [time machine]
---

[How can I manually delete old backups to free space for Time Machine?](http://apple.stackexchange.com/questions/39287/how-can-i-manually-delete-old-backups-to-free-space-for-time-machine)


```
sudo tmutil delete /Volumes/drive_name/Backups.backupdb/old_mac_name

sudo tmutil delete /Volumes/drive_name/Backups.backupdb/mac_name/YYYY-MM-DD-hhmmss

```