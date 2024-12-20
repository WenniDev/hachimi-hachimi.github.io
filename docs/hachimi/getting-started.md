# Getting started

## Compatibility

Please check the compatibility before installing.

### Windows
| Version | Supported |
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

As of v0.13.0, Hachimi currently supports two loading methods with different installation procedures. **Choose only one method, and either use the installer or do it manually, do NOT use multiple things at once.**

#### Method 1: DotLocal DLL redirection (UnityPlayer.dll) (recommended)

- **Using the installer:** Download the latest `hachimi_installer.exe` from the [Releases page](https://github.com/Hachimi-Hachimi/Hachimi/releases). Run it, **choose "UnityPlayer.dll" as the target** and click on Install.

::: info
When installing for the first time, the installer might ask to you enable DotLocal DLL redirection. Press OK and it will be enabled for you. **You will need to restart your computer after enabling for it to work.**
:::

- **Manually**
1. Refer to the "Configure the registry" section in [this article](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-redirection#optional-configure-the-registry) to enable DLL redirection. Restart your computer after you're done.
2. Download the latest `hachimi.dll` from the [Releases page](https://github.com/Hachimi-Hachimi/Hachimi/releases).
3. In the game install folder, create a new folder named `umamusume.exe.local` and move the downloaded DLL file there. Rename it to `UnityPlayer.dll`.

#### Method 2: Plugin shimming (cri_mana_vpx.dll)

You'll need to install **both** of these things:

- **Hachimi**
    - **Using the installer:** Download the latest `hachimi_installer.exe` from the [Releases page](https://github.com/Hachimi-Hachimi/Hachimi/releases). Run it, **choose "cri_mana_vpx.dll" as the target** and click on Install.
    - **Manually:** Download the latest `hachimi.dll` from the [Releases page](https://github.com/Hachimi-Hachimi/Hachimi/releases) and put it in `C:\Windows\System32` as `cri_mana_vpx.dll`.
- **Shinmy (DMM shim)**
    - **Using the installer:** Download the latest `shinmy_installer.exe` from the [Releases page](https://github.com/Hachimi-Hachimi/Shinmy/releases). Run it and click on Install. No need to modify any of the options if you don't know what they mean. In case the installer fails to detect DMM's install folder, you will need to select it manually.
    - **Manually:** Download the latest `shinmy_mallet.dll` from the [Releases page](https://github.com/Hachimi-Hachimi/Shinmy/releases) and put it in DMM's install directory. Rename it to `version.dll` or `winhttp.dll`.

::: warning
After installing Shinmy, every time you start DMM, multiple programs with a name similar to `shinmy.exe` will attempt to start along with the launcher. Please choose "Yes" on the UAC prompt for all of them if it shows up, this is required for the shim to work properly.
:::

#### Migrating from method 2 to method 1
You might want to switch from method 2 to method 1, however this process is not exactly straightforward compared to the opposite (for 1 -> 2, just uninstall and reinstall). 

You will need to cleanly uninstall Shinmy first; make sure that it isn't running when you're deleting it because it survives for up to 30 seconds after DMM closes and can restore itself. **The easiest way to do this is to just use the installer** (which also happens to be an uninstaller), it will clean up everything properly for you.

After that, you can just uninstall Hachimi as normal.

### Android

The easiest way to install is by using [UmaPatcher](https://github.com/LeadRDRK/UmaPatcher) which will modify the APK for you. It's recommended that you not have the game already installed before using this.

::: danger
If you have already installed the game, you must uninstall it before installing the patched version for the first time. You can update the game later without uninstalling it by installing another patched version.
:::

::: danger
Do not get your APK from APKPure, it's known to cause problems.
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