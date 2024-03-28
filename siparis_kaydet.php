<?php
// Formdan gelen verileri al
$ad = $_POST['ad'];
$soyad = $_POST['soyad'];
$adres = $_POST['adres'];
$email = $_POST['email'];
$telefon = $_POST['telefon'];

// Sipariş bilgilerini bir dize olarak oluştur
$siparis_bilgisi = "Ad: $ad\nSoyad: $soyad\nAdres: $adres\nE-posta: $email\nTelefon: $telefon\n\n";

// Sipariş bilgilerini bir dosyaya ekle
$dosya = fopen("siparisler.txt", "a") or die("Dosya açılamadı!");
fwrite($dosya, $siparis_bilgisi);
fclose($dosya);

// Başarı mesajını göster
echo "Siparişiniz başarıyla alındı. Teşekkür ederiz!";
?>
