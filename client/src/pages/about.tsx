// about.tsx dosyası
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Eye, Users, Target, Zap, Award, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'wouter';

import heroImage from '../../../dist/public/assets/images/aboutUs/just-an-idea.png';
import cinarAvatar from '../../../dist/public/assets/images/aboutUs/cinar.png';
import emirhanAvatar from '../../../dist/public/assets/images/aboutUs/emirhan.png';
import izelAvatar from '../../../dist/public/assets/images/aboutUs/izel.png';

export default function AboutPage() {
  const { t } = useLanguage();

  // Bu kısım tamamen dinamik olacak şekilde güncellendi.
  const values = [
    {
      icon: Target,
      title: t('aboutValueHonestyTitle'),
      description: t('aboutValueHonestyDesc'),
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Zap,
      title: t('aboutValueSpeedTitle'),
      description: t('aboutValueSpeedDesc'),
      color: "bg-accent-blue/10 text-accent-blue"
    },
    {
      icon: TrendingUp,
      title: t('aboutValueMeasurabilityTitle'),
      description: t('aboutValueMeasurabilityDesc'),
      color: "bg-accent-mint/10 text-accent-mint"
    }
  ];

  // Bu kısım tamamen dinamik olacak şekilde güncellendi.
  const milestones = [
    {
      year: "2025",
      title: t('aboutTimelineMilestone1Title'),
      description: t('aboutTimelineMilestone1Desc')
    },
    {
      year: "2025 Q2",
      title: t('aboutTimelineMilestone2Title'),
      description: t('aboutTimelineMilestone2Desc')
    },
    {
      year: "2025 Q3",
      title: t('aboutTimelineMilestone3Title'),
      description: t('aboutTimelineMilestone3Desc')
    },
    {
      year: "2025 Q4",
      title: t('aboutTimelineMilestone4Title'),
      description: t('aboutTimelineMilestone4Desc')
    }
  ];

  const team = [
    {
      name: "Emirhan Demir",
      title: "Founder & CEO",
      avatar: emirhanAvatar,
    },
    {
      name: "Çınar Yıldırım",
      title: "FullStack Developer and Lead Dev.",
      avatar: cinarAvatar,
    },
    {
      name: "İzel Görnük",
      title: "Marketing",
      avatar: izelAvatar,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Clean Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-soft-paper to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6 tracking-wide">
                <span>{t('aboutHeroTitleStart')} </span>
                <span className="gradient-text">{t('aboutHeroTitleEnd')}</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t('aboutHeroSubtitle')}
              </p>
              <div className="flex items-center space-x-6 text-muted-foreground">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">+10</div>
                  <div className="text-sm">{t('aboutSuccessfulProjects')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3</div>
                  <div className="text-sm">{t('aboutMainSegments')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2024</div>
                  <div className="text-sm">{t('aboutFoundingYear')}</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={heroImage}
                  alt="Team collaboration and innovation" 
                  className="rounded-3xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-blue/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
              {t('aboutMissionTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('aboutMissionSubtitle')}
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Eye className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                {t('aboutMissionCardTitle')}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('aboutMissionCardDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-soft-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
              {t('aboutValuesTitle')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('aboutValuesSubtitle')}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-background p-8 rounded-3xl shadow-lg border border-border">
                <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
              {t('aboutTimelineTitle')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('aboutTimelineSubtitle')}
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <div className="bg-soft-paper p-6 rounded-2xl flex-1 border border-border group-hover:border-primary/20 transition-colors">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-sm font-medium text-primary">{milestone.year}</span>
                    <div className="h-1 w-8 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-soft-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
              {t('aboutTeamTitle')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('aboutTeamSubtitle')}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-background p-8 rounded-3xl shadow-lg border border-border text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-3xl mx-auto mb-6 object-cover"
                />
                <h3 className="font-heading font-semibold text-xl mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
            {t('aboutCtaTitle')}
          </h2>
          <p className="text-xl opacity-90 mb-8">
            {t('aboutCtaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-background text-primary hover:bg-background/90 px-8 py-4 text-lg font-semibold hover-lift"
            >
              {t('startFree')}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-background text-background hover:bg-background hover:text-primary px-8 py-4 text-lg font-semibold hover-lift"
            >
              {t('aboutCtaContact')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}