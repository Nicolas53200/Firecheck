' ============================================================
'  Lancement automatique de FireCheck (PWA) au démarrage
'  CIS Château-Gontier - Service technique
' ============================================================
'
'  INSTALLATION :
'  1. Place ce fichier dans le dossier "Démarrage" de Windows :
'     Appuie sur Windows + R, tape : shell:startup
'     Colle ce fichier dans le dossier qui s'ouvre.
'  2. Redémarre le PC (ou double-clique sur le fichier pour tester).
'
'  Ce script lance Edge en mode "application" (--app=...), ce qui
'  ouvre FireCheck dans sa propre fenêtre sans barre d'adresse,
'  comme une vraie application installée.
' ============================================================

Dim objShell
Set objShell = CreateObject("WScript.Shell")

Dim ficheckUrl
ficheckUrl = "https://nicolas53200.github.io/Firecheck/"

Dim edgePath
edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

' Si Edge n'est pas trouvé au chemin standard, on essaie le chemin 64 bits
If Not CreateObject("Scripting.FileSystemObject").FileExists(edgePath) Then
    edgePath = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
End If

objShell.Run """" & edgePath & """ --app=" & ficheckUrl, 1, False

Set objShell = Nothing
