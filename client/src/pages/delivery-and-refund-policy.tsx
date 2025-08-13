import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/use-language';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export default function DeliveryAndRefundPolicyPage() {
  const { t } = useLanguage();

  const content = {
    tr: {
      title: "EraEnvision Teslimat ve İade Politikası",
      effectiveDate: "Yürürlük Tarihi: 04/07/2025",
      companyTitle: "Emirhan Demir – EraEnvision",
      businessAddress: "İş Adresi: Atakent Mah. Mithatpaşa Cad. No:116 K:2 Ümraniye/İstanbul",
      contact: "İletişim: info@eraenvision.com | emirhan@eraenvision.com",
      phone: "Telefon: +90 553 741 97 99",
      sections: [
        {
          title: "1. TESLİMAT POLİTİKASI",
          body: "EraEnvision platformu, dijital ürün ve hizmetler sunmaktadır. Fiziksel ürün satışı yapılmamaktadır. Bu nedenle, teslimatlar yalnızca elektronik ortamda gerçekleşir.",
          subsections: [
            {
              title: "Teslimat Yöntemi",
              body: "Satın alınan hizmet(ler), ödeme onayı sonrasında kayıtlı e-posta adresinize veya EraEnvision panelinizdeki hesabınıza tanımlanır. AI danışmanlık modülü, eğitim materyalleri, analiz raporları ve dijital danışmanlık hizmetleri doğrudan dijital platformlar üzerinden sağlanmaktadır."
            },
            {
              title: "Teslimat Süresi",
              body: "Hizmet satın alımı sonrasında, en geç 24 saat içinde sistem tanımlaması gerçekleştirilir. Özelleştirilmiş hizmetler için teslimat süresi kullanıcı ile yazılı olarak paylaşılır ve karşılıklı mutabakat sağlanır."
            }
          ]
        },
        {
          title: "2. İADE POLİTİKASI",
          body: "EraEnvision üzerinden satın alınan hizmetlerin çoğu, kişiselleştirilmiş dijital ürün niteliğindedir. Bu kapsamda iade koşulları, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği çerçevesinde değerlendirilir.",
          subsections: [
            {
              title: "Cayma Hakkı",
              body: "Tüketici, 14 gün içinde hiçbir gerekçe göstermeksizin ve cezai şart ödemeksizin sözleşmeden cayma hakkına sahiptir. Ancak, tüketicinin onayı ile hizmet ifasına başlanan durumlarda cayma hakkı geçerli değildir. Özelleştirilmiş hizmetlerin (yol haritası, analiz raporları, birebir danışmanlık vb.) üretimine başlanmışsa cayma hakkı kaybedilir."
            },
            {
              title: "İade Süreci",
              body: "Cayma hakkı kullanılmak istenirse, kullanıcının aşağıdaki iletişim kanallarından birini kullanarak yazılı bildirimde bulunması gerekmektedir: E-posta: info@eraenvision.com Konu: İade Talebi. İade onayı alındıktan sonra varsa tahsil edilen bedel, 10 iş günü içinde kullanılan ödeme yöntemine iade edilir. İade süreci, dijital içeriğe erişimin kesildiği ve raporların kullanılmadığı sistem tarafından tespit edildikten sonra başlatılır."
            },
            {
              title: "İade Edilemeyen Hizmetler",
              list: [
                "Kullanıcının onayı ile ifasına başlanan ve anında ifa edilen dijital hizmetler",
                "Kullanıcının bireysel verilerine göre özelleştirilen hizmetler",
                "Üçüncü taraf API bağlantıları üzerinden sunulan (örneğin AI tabanlı danışmanlık çıktıları) geri alınamayacak hizmetler"
              ]
            }
          ]
        },
        {
          title: "3. DESTEK VE İLETİŞİM",
          body: "Teslimat ve iade süreçleri ile ilgili tüm destek talepleriniz için:",
          list: [
            "E-posta: info@eraenvision.com",
            "İkincil E-posta: emirhan@eraenvision.com",
            "Web: www.eraenvision.com"
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
              {selectedContent.businessAddress}
            </p>
            <p className="text-sm text-muted-foreground">
              {selectedContent.contact}
            </p>
            <p className="text-sm font-medium text-muted-foreground">
              {selectedContent.phone}
            </p>
            <Separator />
            {selectedContent.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="font-heading font-semibold text-2xl lg:text-3xl">
                  {section.title}
                </h2>
                {section.body && (
                  <p className="text-muted-foreground leading-relaxed">
                    {section.body}
                  </p>
                )}
                {section.subsections && (
                  <div className="space-y-4">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="space-y-2">
                        <h3 className="font-semibold text-lg">
                          {subsection.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {subsection.body}
                        </p>
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
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}