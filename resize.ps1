Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\LENOVO\Desktop\aldaowod-delivery\splash_delivery_icon.png"
$img = [System.Drawing.Image]::FromFile($srcPath)

function Resize-Image($width, $height, $destPath) {
    $bmp = New-Object System.Drawing.Bitmap $width, $height
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.DrawImage($img, 0, 0, $width, $height)
    $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
}

Resize-Image 512 512 "c:\Users\LENOVO\Desktop\aldaowod-delivery\icon-512.png"
Resize-Image 192 192 "c:\Users\LENOVO\Desktop\aldaowod-delivery\icon-192.png"
Resize-Image 1280 720 "c:\Users\LENOVO\Desktop\aldaowod-delivery\screenshot-wide.png"
Resize-Image 720 1280 "c:\Users\LENOVO\Desktop\aldaowod-delivery\screenshot-narrow.png"

$img.Dispose()
