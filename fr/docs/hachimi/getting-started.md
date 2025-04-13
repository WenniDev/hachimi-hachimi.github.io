# Introduction
<small>

Cette page est disponible dans d'autres langues :

[English](/docs/hachimi/getting-started.html) | [Tiếng Việt](/vi/docs/hachimi/getting-started.html) | [Deutsch](/de/docs/hachimi/getting-started.html) | [简体中文](/zh-cn/docs/hachimi/getting-started.html) | [Bahasa Indonesia](/id/docs/hachimi/getting-started.html)

</small>

## Compatibilité

Assurez-vous que votre appareil est compatible avant de commencer l'installation.

### Windows
| Version | Compatible |
| --- | :---: |
| JP | ✅ |
| KR | ⚠️ |

### Android

| Version | Installation<br>normale | Installation<br>directe |
| --- | :---: | :---: |
| JP | ✅ | ✅ |
| KR | ⚠️ | ⚠️ |
| TW GP | ⚠️ | ❔ |
| TW MC | ⚠️ | ⚠️ |
- ✅ - Totalement compatible.
- ⚠️ - Fonctionnel, mais le jeu ne se lancera pas pour diverses raisons (notamment l'anti-triche).
- ❔ - Peut fonctionner, mais n'y comptez pas.
- ❌ - Non compatible.

## Installation

### Windows

Depuis la version v0.13.0, Hachimi prend en charge deux méthodes d'injection avec des procédures d'installation différentes. **Choisissez une seule méthode et utilisez soit l'installateur, soit l'installation manuelle, mais pas les deux à la fois.**

#### Méthode 1 : Redirection DLL DotLocal (UnityPlayer.dll) (recommandée)

::: warning
Certains systèmes d'anti-triche comme Vanguard n'apprécient pas que la redirection DLL soit activée, même si cela n'affecte pas directement le jeu qu'ils protègent. Désactivez la redirection DLL lorsque vous voulez jouer à un jeu utilisant Vanguard ou un autre anti-triche similaire.
:::

::: info
Le jeu ne se lance plus après l'installation ? Accédez au dossier d'installation du jeu, faites un clic droit sur l'exécutable du jeu, puis Propriétés, et activez **"Désactiver les optimisations du mode plein écran"** dans l'onglet Compatibilité.
:::

- **Installateur :** Téléchargez la dernière version de `hachimi_installer.exe` depuis la [page des Releases](https://github.com/Hachimi-Hachimi/Hachimi/releases). Exécutez-le, **choisissez "UnityPlayer.dll" comme cible** et cliquez sur Install.

Lors de la première installation, l'installateur peut vous demander d'activer la redirection DLL DotLocal. Appuyez sur OK et cela sera activé pour vous. **Vous devrez redémarrer votre ordinateur après l'activation pour que cela fonctionne.**

- **Manuellement**
1. Consultez la section "Configurer le Registre" dans [cet article](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-redirection#optional-configure-the-registry) pour activer la redirection DLL. Redémarrez votre ordinateur après avoir terminé.
2. Téléchargez le dernier `hachimi.dll` depuis la [page des Releases](https://github.com/Hachimi-Hachimi/Hachimi/releases).
3. Dans le dossier d'installation du jeu, créez un nouveau dossier nommé `umamusume.exe.local` et déplacez-y le fichier DLL téléchargé et renommez-le en `UnityPlayer.dll`.
4. Téléchargez le dernier `cellar.dll` depuis la [page des Releases de Cellar](https://github.com/Hachimi-Hachimi/Cellar/releases).
5. Déplacez-le dans `umamusume.exe.local` et renommez-le en `apphelp.dll`.

::: info
Astuce pour les joueurs de LoL/Valorant : Vous devrez désactiver la redirection DLL chaque fois que vous voulez jouer à ces jeux. Vous pouvez utiliser ce programme pour activer/désactiver rapidement : https://github.com/LeadRDRK/DotLocalToggle/releases. Exécutez-le jusqu'à ce qu'il indique que la redirection DLL est désactivée, puis redémarrez votre ordinateur.
:::

#### Méthode 2 : Plugin shimming (cri_mana_vpx.dll)

::: warning
Cette méthode ne fonctionne plus après une mise à jour récente. Veuillez suivre le guide ci-dessous pour migrer vers la méthode 1.
:::

#### Migration de la méthode 2 à la méthode 1
Vous pourriez vouloir passer de la méthode 2 à la méthode 1, cependant ce processus n'est pas aussi simple que l'inverse (pour 1 -> 2, il suffit de désinstaller et réinstaller).

Vous devrez désinstaller proprement Shinmy en premier ; assurez-vous qu'il ne fonctionne pas lorsque vous le supprimez, car il peut survivre jusqu'à 30 secondes après la fermeture de DMM et se restaurer. **Le moyen le plus simple est d'utiliser l'installateur** (qui sert également de désinstallateur), il nettoiera tout correctement pour vous.

Après cela, vous pouvez désinstaller Hachimi normalement.

### Android

Le moyen le plus simple d'installer est d'utiliser [UmaPatcher](https://github.com/LeadRDRK/UmaPatcher) qui modifiera l'APK pour vous.

::: danger
Si vous avez déjà installé le jeu, vous devez le désinstaller avant d'installer la version patchée pour la première fois. Vous pourrez mettre à jour le jeu plus tard sans le désinstaller en installant une autre version patchée.
:::

::: danger
Ne téléchargez pas votre APK depuis APKPure, cela est connu pour causer des problèmes.
:::

1. Téléchargez et installez la dernière version d'UmaPatcher depuis la [page des Releases](https://github.com/LeadRDRK/UmaPatcher/releases).
2. Préparez un package d'installation pour le jeu, qui peut être :
    - **Fichiers APK fractionnés :** Un fichier APK de base et des fichiers config APK (config.arm64_v8a, config.armeabi-v7a, etc.), choisissez uniquement la config adaptée à votre appareil (version JP seulement).
    - **Fichier APK unique :** Un gros fichier APK complet.
    - **Fichier XAPK :** Un dossier compressé contenant les fichiers APK fractionnés (avec l'extension renommée en XAPK).
3. Ouvrez UmaPatcher et choisissez "Normal install". Sélectionnez le(s) fichier(s) que vous avez préparé(s).
4. Appuyez sur Patch pour démarrer les processus de patch et d'installation.

Vous devrez répéter ce processus à partir de l'étape 2 chaque fois que UM:PD est mise à jour.

#### Pour les utilisateurs rootés
UmaPatcher inclut une option d'installation rootée qui ne nécessite pas de désinstaller le jeu et permet de mettre à jour le jeu normalement depuis n'importe quel app store.

Avec le jeu installé, appuyez sur la carte en haut de l'écran d'accueil pour sélectionner l'application que vous souhaitez patcher (si nécessaire). Ensuite, sélectionnez "Direct install (root required)" comme méthode d'installation et appuyez sur Patch. Aucun fichier d'entrée n'est nécessaire.

Vous devrez répéter ce processus à chaque fois que UM:PD est mise à jour.

#### Manuellement
1. Compilez ou téléchargez les bibliothèques précompilées depuis la [page des Releases](https://github.com/Hachimi-Hachimi/Hachimi/releases).
2. Extrayez le fichier APK du jeu. Vous pouvez utiliser [apktool](https://apktool.org/) pour cela.
3. Renommez le fichier `libmain.so` dans chacun des dossiers à l'intérieur de `lib` en `libmain_orig.so`.
4. Copiez les bibliothèques proxy dans leurs dossiers correspondants (par exemple, `libmain-arm64-v8a.so` va dans `lib/arm64-v8a`). Renommez-les en `libmain.so`.
5. Recompilez le fichier APK puis installez-le.

## Première configuration
Lors du premier lancement du jeu après l'installation de Hachimi, vous devriez voir cette boîte de dialogue :

![Configuration initiale](/assets/first-time-setup.jpg)

*Si vous ne la voyez pas, cela signifie que Hachimi n'a pas été installé correctement. Veuillez vérifier le guide d'installation et réessayer.*

Appuyez sur Next et choisissez votre dépôt de traduction préféré, puis appuyez sur Done pour enregistrer votre configuration et démarrer la vérification des mises à jour.

Hachimi vous invitera maintenant à télécharger une nouvelle mise à jour de traduction, cliquez sur Yes pour commencer le téléchargement des fichiers de traduction.
