# Config

This page lists the config options and describes what they're used for.

The config file can be found at one of these locations:
- Windows: `[Game install folder]\hachimi\config.json`
- Android: `/sdcard/Android/media/jp.co.cygames.umamusume/hachimi/config.json`

**Note:** Some of these options are not available in the Config Editor and must be added manually.

- `debug_mode`: Whether to enable debug mode or not. Currently, this only enables/disables debug logging.
- `translator_mode`: Intended for translators. Logs untranslated UI strings to the console and enables some other features useful for translators.
- `disable_gui`: Disables the built-in GUI. Note that this will also disable the translation updater.
- `localized_data_dir`: The directory that contains the localized data. Must have a localized data configuration file.
- `target_fps`: The target FPS of the game. If not set, Hachimi will not attempt to override the game's FPS. Doesn't have any effect when `vsync_count` is set.
- `vsync_count`: (Windows only) The VSync count. Set it to 1 to match your monitor's refresh rate. Refer to the [Unity docs](https://docs.unity3d.com/ScriptReference/QualitySettings-vSyncCount.html) for more info.
- `open_browser_url`: The default URL to open when launching the in-game browser from the GUI. Default: `https://www.google.com/`
- `virtual_res_mult`: The virtual resolution multiplier. If your device can handle it, 1.5 or 2 is a good value; anything higher than that is probably overkill. Can be applied without closing the game by doing a "Soft restart".
- `translation_repo_index`: The index URL of the translation repo. Used by the translation updater.
- `skip_first_time_setup`: Whether to skip the first time setup on startup or not. Automatically set to `true` once the first time setup dialog is closed.
- `disable_auto_update_check`: Disables auto update checks on startup.
- `disable_translations`: Disables translation features.
- `menu_open_key`: The Windows VK code for the key that opens the menu. Default: `39` (Right arrow key). Check [this page](https://cherrytree.at/misc/vk.htm) for a list of all of the keycodes.
- `load_libraries`: List of libraries to load on startup. Can be used to load other mods. Example: `["applejuicer.dll", "banana.dll"]`