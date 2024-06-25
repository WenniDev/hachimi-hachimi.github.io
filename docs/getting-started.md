# Getting started

## Installation

### Windows
::: warning
It's recommended that you remove any other translation patches before continuing as they might conflict with Hachimi, especially Trainers' Legend G, which will not work with Hachimi at all.
:::

- Using the installer: Download the latest `hachimi_installer.exe` from the [Releases page](https://github.com/Hachimi-Hachimi/Hachimi/releases). Run it and click on Install. No need to modify any of the options if you don't know what they mean.
- Manually: Download the latest `hachimi.dll` from the [Releases page](https://github.com/Hachimi-Hachimi/Hachimi/releases) and put it in the game's install directory. Rename it to `dxgi.dll`, `winhttp.dll` or `version.dll`.

### Android
The easiest way to install is by using [UmaPatcher](https://github.com/LeadRDRK/UmaPatcher) which will modify the APK for you.

1. Download and install the latest version of UmaPatcher from the [Releases page](https://github.com/LeadRDRK/UmaPatcher/releases).
2. Prepare an APK file of the game.
3. Open UmaPatcher and choose "Select and patch a file". Pick the APK file that you had prepared.
4. Choose "Save patched APK file" as the install method and tap on Patch.
5. Upon completion, it will ask you to save the file. Save it somewhere you could easily access later.
6. Open your file manager and open the ***patched*** APK file to install it. Do not install the original APK.
7. (Optional, recommended) Delete both APK files.

You'll need to repeat this process from step 2 again whenever the app updates.

::: danger
If you have installed the game before, you must uninstall it before installing the patched version for the first time. You can update the game later without uninstalling it by installing another patched version.
:::

::: warning
The default filename for the patched file is always "patched.apk". Whenever duplicate files are present, it'll be named like "patched.apk (1)" instead when saved. It's recommended that you delete old APK files after installing or pick another name for the file to prevent any confusion.
:::

#### For rooted users
UmaPatcher includes a rooted install option that doesn't require you to uninstall the game and let the game update normally from any app store.

Instead of selecting the APK and patching it before installing, you should install it first then pick "Get APK file from installed app" and "Direct install" as the install method. This will mount a patched app on top of the existing app and replaces some of the app's native libraries.

You'll need to install it again whenever the app updates.

::: warning
You MUST unmount the app before installing an update. This can be done by pressing on the "Unmount" button that appears after you've installed the mod through the "Direct install" method.
:::

::: info
Some devices don't even need it mounted, so you could just unmount it immediately after installing.
:::

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