import { useEffect, useState } from 'react';

const texts = ["gelecek kurun", "işinizi dönüştürün", "başarıya ulaşın"];

export function AnimatedText() {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeoutId: NodeJS.Timeout;

    if (isDeleting) {
      // Harf harf silme işlemi
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
        }, 75); // Silme hızı (milisaniye)
      } else {
        // Silme işlemi bitti, bir sonraki metne geç
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    } else {
      // Harf harf yazma işlemi
      if (displayedText.length < currentText.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        }, 150); // Yazma hızı (milisaniye)
      } else {
        // Yazma işlemi bitti, silmeden önce bekle
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 1500); // Yazma bittikten sonra bekleme süresi (milisaniye)
      }
    }

    // Bileşen kaldırıldığında temizlik yap
    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <>
      <span className="whitespace-nowrap">
        {displayedText}
      </span>
      <span className="blinking-cursor">|</span>
    </>
  );
}