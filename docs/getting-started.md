# Getting started

## Compatibility

Please check the compatibility before installing.

### Windows
| Version | Works |
| --- | :---: |
| JP | ✅ |
| KR | ⚠️ |

### Android

| Version | Normal install | Direct install |
| --- | :---: | :---: |
| JP | ✅ | ✅ |
| KR | ⚠️ | ⚠️ |
| TW GP | ⚠️ | ❔ |
| TW MC | ⚠️ | ⚠️ |
- ✅ - Fully supported.
- ⚠️ - Works, but the game itself won't due to external circumstances (e.g. the AC triggering).
- ❔ - Might work, don't count on it.
- ❌ - Not supported.


## Installation

### Windows

::: warning
It's recommended that you remove any other translation patches before continuing as they might conflict with Hachimi, especially Trainers' Legend G, which will not work with Hachimi at all.
:::

- Using the installer: Download the latest `hachimi_installer.exe` from the [Releases page](https://github.com/Hachimi-Hachimi/Hachimi/releases). Run it and click on Install. No need to modify any of the options if you don't know what they mean.
- Manually: Download the latest `hachimi.dll` from the [Releases page](https://github.com/Hachimi-Hachimi/Hachimi/releases) and put it in the game's install directory. Rename it to `dxgi.dll`, `winhttp.dll` or `version.dll`.

### Android

The easiest way to install is by using [UmaPatcher](https://github.com/LeadRDRK/UmaPatcher) which will modify the APK for you. It's recommended that you not have the game already installed before using this.

::: danger
If you have already installed the game, you must uninstall it before installing the patched version for the first time. You can update the game later without uninstalling it by installing another patched version.
:::

1. Download and install the latest version of UmaPatcher from the [Releases page](https://github.com/LeadRDRK/UmaPatcher/releases).
2. Prepare an installation package for the game, which can be:
    - **Split APK files:** A base APK file and one of the split config APKs (config.arm64_v8a, config.armeabi-v7a, etc.),
    choose only one split config that's suitable for your device.
    This is currently only used by the JP version.
    - **Single APK file**: A full, fat APK file.
    - **XAPK file**: A ZIP file that contains the split APK files (with the extension renamed to XAPK).
3. Open UmaPatcher and choose "Normal install". Select the file(s) that you have prepared.
4. Tap on Patch to start the patching and installation process.

You'll need to repeat this process from step 2 again whenever the app updates.

#### For rooted users
UmaPatcher includes a rooted install option that doesn't require you to uninstall the game and let the game update normally from any app store.

With the game installed, tap on the card on top of the home screen to select the app that you want to patch (if needed). Then select "Direct install" as the install method and tap on Patch. No input files are needed.

You'll need to install it again whenever the app updates.

#### Manually
1. Build or download the prebuilt libraries from the [Releases page](https://github.com/Hachimi-Hachimi/Hachimi/releases).
2. Extract the APK file of the game. You might want to use [apktool](https://apktool.org/) for this.
3. Rename the `libmain.so` file in each of the folders inside `lib` to `libmain_orig.so`.
4. Copy the proxy libraries to their corresponding folders (e.g. `libmain-arm64-v8a.so` goes to `lib/arm64-v8a`). Rename them to `libmain.so`.
5. Build the APK file and install it.

## First Time Setup
Upon launching the game for the first time after installing Hachimi, you should be greeted with this dialog:

![First Time Setup](/assets/first-time-setup.jpg)

*If you don't see it, it means that Hachimi has not been installed correctly. Please check the install guide and try again.*

Tap on Next and choose your preferred translation repo, then tap on Done to save your configuration and start the update check.

Hachimi will now prompt you to download a new translation update, click on Yes to start downloading the translation files.

## Troubleshooting
- I/O error: Permission denied (os error 13)

This could happen due to the new scoped storage introduced on Android 10, which makes Hachimi fail to create its data directory. To workaround this, open your file manager, go to Android/media and create a folder named "jp.co.cygames.umamusume". Relaunch the game and the problem should be fixed.

## FAQs
- The update just finished installing but everything's still not translated. Why?

The translations may have been installed, but the game hasn't attempted to load the new translations yet. Simply navigate to another screen (that triggers a loading procedure) and you should see translations appearing.

- Can I play the game while the update is in progress?

Yes, it is totally fine to continue playing the game while the translation data is still being updated, but do note that translations are disabled during update and will disappear when you navigate away from the current screen in the game. It should come back once it finishes installing and the game starts loading it (see above).

- I accidentally closed the game while it was installing. Is it over for me?

Nope. Just open the game back up again and it should ask you to start downloading from the beginning.

- What's that `.tl_repo_cache` file in my Hachimi folder? Can I eat it?

No. It's used to track the current state of the translation files for incremental updates later on; do not modify it manually or delete it.

- How do I use another mod with Hachimi?

See the `load_libraries` option on the [Config page](/docs/config).