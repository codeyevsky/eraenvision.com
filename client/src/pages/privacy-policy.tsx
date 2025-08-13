import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/use-language';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  const content = {
    tr: {
      title: "EraEnvision Gizlilik Politikası",
      effectiveDate: "Yürürlük Tarihi: 04/07/2025",
      companyTitle: "Emirhan Demir – EraEnvision",
      website: "Web Sitesi: www.eraenvision.com",
      contact: "İletişim: info@eraenvision.com | emirhan@eraenvision.com",
      sections: [
        {
          title: "1. GİRİŞ",
          body: "Bu Gizlilik Politikası, EraEnvision platformunu ziyaret eden, hizmet alan veya içeriğiyle etkileşimde bulunan tüm kullanıcıların kişisel verilerinin işlenmesi, saklanması ve paylaşılmasına ilişkin esasları açıklamaktadır. Emirhan Demir şahıs firması olarak yürüttüğümüz tüm faaliyetlerde kullanıcılarımızın gizliliği ve veri güvenliği birincil önceliğimizdir. Bu politika, başta 6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve AB Genel Veri Koruma Tüzüğü (GDPR) olmak üzere tüm ilgili mevzuata uygun olarak hazırlanmıştır.",
        },
        {
          title: "2. TOPLANAN VERİLER",
          body: "EraEnvision platformunda aşağıdaki kullanıcı verileri toplanabilir:",
          subsections: [
            {
              title: "a. Kimlik Bilgileri",
              list: ["Adı soyadı", "E-posta adresi", "Telefon numarası (isteğe bağlı)", "Şirket adı (isteğe bağlı)"]
            },
            {
              title: "b. Oturum Bilgileri",
              list: ["IP adresi", "Tarayıcı ve cihaz bilgileri", "Çerez verileri", "Giriş/çıkış zaman damgaları"]
            },
            {
              title: "c. Ödeme ve Fatura Bilgileri",
              list: ["Kart türü (numarası saklanmaz)", "Fatura adresi", "Vergi numarası (kurumsal kullanıcılar için)"]
            },
            {
              title: "d. İşlem ve Kullanım Verileri",
              list: ["Hizmet kullanım geçmişi", "AI modülleriyle etkileşim verileri", "Gönderilen prompt ve mesaj içerikleri", "Yüklenen dosyalar, medya ve içerikler"]
            }
          ]
        },
        {
          title: "3. VERİ İŞLEME AMAÇLARI",
          body: "Toplanan veriler aşağıdaki amaçlarla işlenmektedir:",
          list: [
            "Hizmet sunmak, üyelik oluşturmak ve kullanıcı profillerini yönetmek",
            "Yapay zeka modüllerini kişiselleştirmek",
            "Faturalandırma süreçlerini yürütmek",
            "Yasal yükümlülüklere uymak",
            "Teknik sorunları analiz etmek",
            "Ürün ve hizmetleri geliştirmek",
            "Kullanıcı destek taleplerine yanıt vermek",
            "Reklam ve pazarlama faaliyetlerini optimize etmek (onay dahilinde)"
          ]
        },
        {
          title: "4. VERİ SAKLAMA SÜRESİ",
          body: "Kişisel veriler, işleme amaçlarının ortadan kalkması veya ilgili mevzuatta belirtilen sürenin dolması halinde derhal silinir, yok edilir veya anonim hale getirilir. Örnek süreler: Fatura bilgileri: 10 yıl, Oturum verileri: 12 ay, AI kullanım geçmişi: 6 ay (anonimleştirilebilir), Hesap kapatma: Talep üzerine tüm veriler 30 gün içinde silinir."
        },
        {
          title: "5. ÜÇÜNCÜ TARAFLARLA PAYLAŞIM",
          body: "EraEnvision, kullanıcı verilerini hiçbir zaman izin olmadan aşağıdaki taraflarla paylaşmaz. Ancak, gerekli güvenlik protokolleri dahilinde, sınırlı veri paylaşımı aşağıdaki taraflarla gerçekleşebilir:",
          list: [
            "Ödeme hizmeti sağlayıcıları (iyzico, Stripe vb.)",
            "Vergi ve finansal mevzuat gereği Hazine ve Maliye Bakanlığı ve e-fatura hizmetleri",
            "Sunucu barındırma ve CDN sağlayıcıları",
            "Yapay zeka altyapı sağlayıcıları (OpenAI, Groq vb.)",
            "Hukuki merciler (mahkeme kararı veya resmi talep halinde)"
          ],
          disclaimer: "Tüm üçüncü taraflar, ilgili KVKK ve/veya GDPR yükümlülüklerine uygun hareket eder."
        },
        {
          title: "6. VERİ GÜVENLİĞİ",
          body: "Kullanıcı verileri, aşağıdaki güvenlik önlemleriyle korunmaktadır:",
          list: [
            "256-bit SSL şifreleme",
            "Gelişmiş sunucu tarafı güvenlik duvarları",
            "Düzenli sızma testleri ve yedeklemeler",
            "Erişim kayıtları ve IP izleme",
            "Yetkisiz erişim kontrolü ve şifrelenmiş veritabanı",
            "2FA (İki Faktörlü Kimlik Doğrulama) destekli giriş altyapısı"
          ]
        },
        {
          title: "7. ÇEREZ POLİTİKASI",
          body: "EraEnvision platformu, kullanıcı deneyimini iyileştirmek ve istatistik toplamak amacıyla çerezler kullanmaktadır. Zorunlu olanlar dışındaki tüm çerezler için önceden açık kullanıcı onayı alınır. Kullanıcılar çerezleri tarayıcı ayarları üzerinden dilediği zaman yönetebilir."
        },
        {
          title: "8. KULLANICININ HAKLARI",
          body: "Kullanıcılar KVKK 11. Maddesi ve GDPR kapsamında aşağıdaki haklara sahiptir:",
          list: [
            "Kişisel verilerinin işlenip işlenmediğini öğrenme",
            "İşlenmişse bilgi talep etme",
            "Verilerin işlenme amacını öğrenme",
            "Yanlış veya eksik verilerin düzeltilmesini isteme",
            "Hukuka aykırı işlenen verilerin silinmesini veya anonimleştirilmesini isteme",
            "İşlenmesinin durdurulmasını ve üçüncü kişilere bildirilmesini talep etme",
            "Otomatik sistemlerle işlenen verilere itiraz etme",
            "Uğradığı zararın tazminini isteme"
          ],
          disclaimer: "Yukarıdaki haklarınızı kullanmak için 📩 emirhan@eraenvision.com adresine e-posta gönderebilirsiniz."
        },
        {
          title: "9. ULUSLARARASI VERİ TRANSFERİ",
          body: "Yabancı sunucular üzerinden sağlanan hizmetlerde (örn. OpenAI, Firebase vb.) ilgili hizmetlerin GDPR uyumlu olması şartıyla yurt dışına veri aktarımı yapılabilir. Bu aktarımlar yalnızca açık onay ve veri minimizasyonu ilkesiyle gerçekleştirilir."
        },
        {
          title: "10. DEĞİŞİKLİK VE GÜNCELLEMELER",
          body: "EraEnvision, mevzuat değişiklikleri veya hizmet kapsamındaki gelişmeler nedeniyle bu Gizlilik Politikasını önceden bildirim yaparak güncelleme hakkını saklı tutar."
        },
        {
          title: "11. İLETİŞİM",
          body: "Gizlilik ile ilgili tüm soru, öneri ve başvurular için:",
          list: [
            "Yetkili Kişi: Emirhan Demir",
            "Şirket: EraEnvision – Şahıs Firması",
            "Adres: Atakent Mah. Mithatpaşa Cad. No:116 K:2 Ümraniye/İstanbul",
            "E-posta: emirhan@eraenvision.com",
            "Telefon: +90 553 741 97 99"
          ]
        }
      ]
    }
  };

  const selectedContent = content.tr;

  return (
    <div className="min-h-screen bg-soft-paper py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6 hover-lift text-muted-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Anasayfaya Dön
          </Button>
        </Link>
        <Card className="rounded-3xl p-8 shadow-lg border-border">
          <CardContent className="space-y-6 pt-0">
            <h1 className="font-heading font-bold text-3xl lg:text-4xl">
              {selectedContent.title}
            </h1>
            <p className="text-sm font-medium text-muted-foreground">
              {selectedContent.effectiveDate}
            </p>
            <p className="text-sm text-muted-foreground">
              {selectedContent.companyTitle}
            </p>
            <p className="text-sm text-muted-foreground">
              {selectedContent.website}
            </p>
            <p className="text-sm text-muted-foreground">
              {selectedContent.contact}
            </p>
            <Separator />
            {selectedContent.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="font-heading font-semibold text-2xl lg:text-3xl">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.body}
                </p>
                {section.subsections && (
                  <div className="space-y-4 pl-4">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="space-y-2">
                        <h3 className="font-semibold text-lg">
                          {subsection.title}
                        </h3>
                        <ul className="list-disc list-inside text-muted-foreground">
                          {subsection.list.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                {section.list && (
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {section.list.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.disclaimer && (
                  <p className="text-sm italic text-muted-foreground">
                    {section.disclaimer}
                  </p>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}