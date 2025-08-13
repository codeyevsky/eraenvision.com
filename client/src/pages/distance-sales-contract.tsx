import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/use-language';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export default function DistanceSalesContractPage() {
  const { t } = useLanguage();

  const content = {
    tr: {
      title: "EraEnvision Mesafeli Satış Sözleşmesi",
      subTitle: "(Emirhan Demir - EraEnvision Şahıs Firması Adına)",
      sections: [
        {
          title: "1. TARAFLAR",
          parties: [
            {
              role: "SATICI",
              list: [
                "Unvanı: Emirhan Demir (EraEnvision)",
                "Adresi: Atakent Mah. Mithatpaşa Cad. No:116 K:2 Ümraniye/İstanbul",
                "Telefon: +90 553 741 97 99",
                "E-mail: info@eraenvision.com",
                "Vergi Dairesi / No: ALEMDAĞ / 2752009583"
              ]
            },
            {
              role: "ALICI",
              list: [
                "Adı / Soyadı: [Sistem tarafından alınır]",
                "Adresi: [Sistem tarafından alınır]",
                "Telefonu: [Sistem tarafından alınır]",
                "E-maili: [Sistem tarafından alınır]"
              ]
            }
          ]
        },
        {
          title: "2. SÖZLEŞMENİN KONUSU",
          body: "İşbu sözleşmenin konusu, ALICI'nın SATICI'ya ait www.eraenvision.com internet sitesinden elektronik ortamda siparişini verdiği, aşağıda nitelikleri ve satış fiyatı belirtilen hizmet(ler)in satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince tarafların hak ve yükümlülüklerinin belirlenmesidir."
        },
        {
          title: "3. SÖZLEŞME KONUSU ÜRÜN VE HİZMETLER",
          body: "Tüm hizmetler dijital olarak sağlanmaktadır. Teslimat fiziksel değildir.",
          table: {
            headers: ["Ürün/Hizmet Adı", "Açıklaması", "Fiyatı (KDV Dahil)"],
            rows: [
              ["EraEnvision AI Launch", "Girişimciler için AI destekli dijital danışmanlık", "[x.xx ₺]"],
              ["EraEnvision AI Scale", "KOBİ ve kurumsal firmalar için AI destekli araçlar", "[x.xx ₺]"],
              ["Diğer Danışmanlık Paketleri", "Paket içeriğine göre belirlenir", "[x.xx ₺]"]
            ]
          }
        },
        {
          title: "4. GENEL HÜKÜMLER",
          body: "4.1 ALICI, www.eraenvision.com internet sitesinde sözleşme konusu hizmetin temel nitelikleri, satış fiyatı ve ödeme şekli ile ilgili ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiğini kabul, beyan ve taahhüt eder. 4.2 ALICI, bu sözleşmeyi ve ön bilgilendirme formunu okuyup onaylamadan sistem üzerinden satın alma işlemini tamamlayamaz. 4.3 SATICI, siparişin tamamlanmasını ve ALICI tarafından ödemenin gerçekleşmesini müteakip hizmeti ifa etmeyi kabul eder. 4.4 Hizmet, www.eraenvision.com sistemi üzerinden ALICI'nın üyelik hesabına dijital olarak sağlanmaktadır. Teslimat, e-mail veya online erişim şeklinde olur."
        },
        {
          title: "5. CAYMA HAKKI",
          body: "5.1 ALICI, 14 gün içerisinde hiçbir gerekçe göstermeksizin ve cezai şart ödemeksizin sözleşmeden cayma hakkına sahiptir. 5.2 Ancak, Mesafeli Sözleşmeler Yönetmeliği Madde 15/ğ uyarınca, elektronik ortamda anında ifa edilen hizmetler ve tüketicinin onayı ile ifasına başlanan hizmetlerde cayma hakkı geçerli değildir. 5.3 ALICI’nın cayma hakkı süresi dolmadan, hizmetin ifasına başlanmasına ilişkin onay, sipariş süreci esnasında alınmış sayılır. 5.4 ALICI cayma hakkını kullanmak istemesi halinde, bu durumu yazılı olarak info@eraenvision.com adresine bildirmekle yükümlüdür."
        },
        {
          title: "6. İPTAL VE İADE KOŞULLARI",
          body: "6.1 ALICI tarafından iptal edilen siparişlerde; iade, ödeme yöntemi ve platformun işlem sürecine göre 14 gün içinde yapılır. 6.2 ALICI ödemeyi kredi kartı ile yapmışsa, iade ilgili bankanın süreçlerine bağlı olarak 2-10 iş günü içinde gerçekleşir. 6.3 Cayma hakkının kullanılamadığı durumlarda (hizmet ifasına başlandığı durumlarda olduğu gibi), ALICI iade talebinde bulunamaz."
        },
        {
          title: "7. FİKRİ MÜLKİYET HAKLARI",
          body: "EraEnvision platformunda sunulan tüm içerik (metin, yazılım, görseller, algoritmalar) EraEnvision markasına aittir. ALICI, bu içerikleri çoğaltamaz, dağıtamaz veya üçüncü kişilerle paylaşamaz. Tüm fikri mülkiyet hakları saklıdır."
        },
        {
          title: "8. KİŞİSEL VERİLERİN KORUNMASI",
          body: "ALICI’nın sipariş esnasında paylaştığı kişisel veriler, 6698 Sayılı KVKK kapsamında işlenmekte olup, yalnızca hizmetin ifası ve yasal gereklilikler için kullanılacaktır. Detaylar Gizlilik Politikası'nda yer almaktadır."
        },
        {
          title: "9. UYUŞMAZLIKLARIN ÇÖZÜMÜ",
          body: "İşbu sözleşmeden doğacak uyuşmazlıklarda, Ticaret Bakanlığı tarafından ilan edilen parasal sınırlar dahilinde Tüketici Hakem Heyetleri, bu sınırları aşan durumlarda ise Tüketici Mahkemeleri yetkilidir."
        },
        {
          title: "10. YÜRÜRLÜK",
          body: "İşbu sözleşmeyi elektronik ortamda onaylamakla, ALICI, sözleşmenin tüm hükümlerini okuduğunu, anladığını ve kabul ettiğini beyan etmiş olur.",
          footer: "SATICI",
          sellerInfo: [
            "Emirhan Demir (EraEnvision)",
            "İstanbul / Türkiye",
            "E-Mail: info@eraenvision.com – emirhan@eraenvision.com"
          ],
          buyerInfo: "ALICI\n[Sistem tarafından alınır]"
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
              {selectedContent.subTitle}
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
                {section.parties && (
                  <div className="space-y-4">
                    {section.parties.map((party, partyIndex) => (
                      <div key={partyIndex} className="space-y-2">
                        <h3 className="font-semibold text-lg text-primary">{party.role}</h3>
                        <ul className="list-disc list-inside text-muted-foreground">
                          {party.list.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                {section.table && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          {section.table.headers.map((header, headerIndex) => (
                            <th key={headerIndex} className="p-2 border border-border text-left font-semibold text-sm text-foreground">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, rowIndex) => (
                          <tr key={rowIndex} className="border-b border-border">
                            {row.map((cell, cellIndex) => (
                              <td key={cellIndex} className="p-2 text-sm text-muted-foreground">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.footer && (
                  <div className="mt-8 space-y-2">
                    <p className="font-semibold text-foreground">{section.footer}</p>
                    <ul className="text-sm text-muted-foreground">
                      {section.sellerInfo.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                    <div className="pt-4 space-y-1">
                      <p className="font-semibold text-foreground">ALICI</p>
                      <p className="text-sm text-muted-foreground">[Sistem tarafından alınır]</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}