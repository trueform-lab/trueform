/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Layout, 
  Search, 
  Cpu, 
  RefreshCw, 
  ChevronRight,
  Star,
  Users,
  TrendingUp,
  AlertCircle,
  X
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [analysisIndex, setAnalysisIndex] = useState(0);
  const [selectedPortfolio, setSelectedPortfolio] = useState<null | number>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const portfolioItems = [
    {
      id: 1,
      title: "일본 구매대행 N사",
      desc: "구매 전환율 18% 상승",
      thumbnail: "/images/portfolio1_01.png",
      fallbackThumb: "https://picsum.photos/seed/portfolio-v-1/600/1500",
      images: [
        "/images/portfolio1_01.png",
        "/images/portfolio1_02.gif",
        "/images/portfolio1_03.png",
        "/images/portfolio1_04.png",
        "/images/portfolio1_05.gif",
        "/images/portfolio1_06.png",
        "/images/portfolio1_07.png",
        "/images/portfolio1_08.png",
        "/images/portfolio1_09.png",
        "/images/portfolio1_10.png",
        "/images/portfolio1_11.png",
        "/images/portfolio1_12.png",
        "/images/portfolio1_13.png",
        "/images/portfolio1_14.png",
        "/images/portfolio1_15.gif",
        "/images/portfolio1_16.png",
        "/images/portfolio1_17.png",
        "/images/portfolio1_18.png"
      ]
    },
    {
      id: 2,
      title: "소상공업 린넨업체 Y사",
      desc: "구매 전환율 14% 상승",
      thumbnail: "/images/portfolio2_01.png",
      fallbackThumb: "https://picsum.photos/seed/portfolio-v-2/600/1500",
      images: [
        "/images/portfolio2_01.png",
        "/images/portfolio2_02.gif",
        "/images/portfolio2_03.png",
        "/images/portfolio2_04.png",
        "/images/portfolio2_05.png",
        "/images/portfolio2_06.png",
        "/images/portfolio2_07.png",
        "/images/portfolio2_08.png",
        "/images/portfolio2_09.png",
        "/images/portfolio2_10.png",
        "/images/portfolio2_11.png",
        "/images/portfolio2_12.png",
        "/images/portfolio2_13.png",
        "/images/portfolio2_14.png",
        "/images/portfolio2_15.png",
        "/images/portfolio2_16.png",
        "/images/portfolio2_17.png",
        "/images/portfolio2_18.png",
        "/images/portfolio2_19.png",
        "/images/portfolio2_20.png",
        "/images/portfolio2_21.png",
        "/images/portfolio2_22.png",
        "/images/portfolio2_23.png"
      ]
    },
    {
      id: 3,
      title: "어덜트 토이샾 S사",
      desc: "구매 전환율 21% 상승",
      thumbnail: "/images/portfolio3_01.png",
      fallbackThumb: "https://picsum.photos/seed/adulttoy-1/600/800",
      images: [
        "/images/portfolio3_01.png",
        "/images/portfolio3_02.mp4",
        "/images/portfolio3_03.png",
        "/images/portfolio3_04.png",
        "/images/portfolio3_05.png",
        "/images/portfolio3_06.png",
        "/images/portfolio3_07.png",
        "/images/portfolio3_08.png",
        "/images/portfolio3_09.png",
        "/images/portfolio3_10.png",
        "/images/portfolio3_11.png"
      ]
    }
  ];

  const analysisResults = [
    "이 구간에서 고객의 70%가 이탈할 가능성이 있습니다. 혜택 강조 섹션을 상단으로 이동하세요.",
    "현재 카피라이팅의 가독성이 낮습니다. 문장을 더 짧게 나누고 핵심 키워드에 볼드 처리를 권장합니다.",
    "리뷰 섹션의 신뢰도가 부족합니다. 실사용자의 포토 리뷰를 상단으로 배치하여 구매 전환율을 높이세요."
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setAnalysisIndex((prev) => (prev + 1) % analysisResults.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          kakaoId: data.kakaoId,
          company: data.url, // Using URL as company/store info for now
          message: data.message
        }),
      });

      if (response.ok) {
        setIsFormSubmitted(true);
        setTimeout(() => {
          setIsFormSubmitted(false);
          reset();
        }, 5000);
      } else {
        alert('상담 신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('네트워크 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Using the provided image as a logo
  const logoUrl = "https://ais-pre-w2re56ccvv4ll2hhotp6uo-104123986725.asia-northeast1.run.app/api/images/trueform-logo.png"; // Placeholder for the attached image logic if applicable, but I'll use a descriptive alt and a stylized div if I can't get the direct link easily. 
  // Actually, I'll use the image from the prompt if possible. Since I can't "see" the URL in the file tree, I'll use a stylized logo for now or a placeholder that looks like the image.
  // Wait, I can see the image in the prompt. I will use the image as the logo.
  const trueformLogo = "https://ais-pre-w2re56ccvv4ll2hhotp6uo-104123986725.asia-northeast1.run.app/api/images/trueform-logo.png"; // This is a guess at the path, I'll use a generic placeholder if it fails, but I'll try to use the image provided.
  // Correction: I'll use the image provided in the prompt as a reference.

  return (
    <div className="min-h-screen selection:bg-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">T</span>
            </div>
            <span className="font-bold text-xl tracking-tight font-display">트루폼</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#problem" className="hover:text-indigo-600 transition-colors">고민</a>
            <a href="#solution" className="hover:text-indigo-600 transition-colors">해결책</a>
            <a href="#process" className="hover:text-indigo-600 transition-colors">프로세스</a>
            <a href="#portfolio" className="hover:text-indigo-600 transition-colors">포트폴리오</a>
            <a href="#contact" className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-all shadow-sm shadow-indigo-200">상담하기</a>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section (3-second persuasion) */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-b from-indigo-50/50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold mb-6">
              <Users className="w-3 h-3" />
              <span>스마트스토어 초보 사장님 전용</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.2] mb-8 text-slate-900 font-display">
              예쁜 디자인보다 중요한 건<br />
              <span className="text-indigo-600">고객이 끝까지 읽게 만드는 구조</span><br />
              입니다.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              트루폼의 3초 점검을 기반으로 설계합니다.<br />
              이탈률은 낮추고 구매 버튼 클릭은 높이는 데이터 기반 상세페이지.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all group">
                무료 상담 신청하기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                포트폴리오 보기
              </a>
            </div>
          </motion.div>
          
          {/* Decorative element */}
          <div className="absolute top-0 right-0 -z-10 opacity-20 hidden lg:block">
            <div className="w-[500px] h-[500px] bg-indigo-200 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* 2. Empathy Section */}
      <section id="problem" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">사장님, 혹시 이런 고민 중이신가요?</h2>
            <p className="text-slate-500">처음 시작하는 사장님들이 가장 많이 겪는 어려움입니다.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "유입은 있는데 구매가 안 돼요", 
                desc: "광고비는 나가는데 장바구니에 담는 고객이 없어 답답합니다.",
                icon: <AlertCircle className="w-6 h-6 text-amber-500" />
              },
              { 
                title: "어디서부터 설명할지 막막해요", 
                desc: "좋은 제품인 건 아는데, 어떻게 글로 풀어야 할지 모르겠습니다.",
                icon: <MessageCircle className="w-6 h-6 text-indigo-500" />
              },
              { 
                title: "디자인 업체는 너무 비싸요", 
                desc: "수백만 원짜리 화려한 디자인보다 실질적인 매출이 급합니다.",
                icon: <TrendingUp className="w-6 h-6 text-indigo-600" />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 font-display">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Problem Definition */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-400 font-bold text-sm tracking-widest uppercase mb-4 block">The Real Problem</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight font-display">
              매출이 안 나오는 이유는<br />
              <span className="text-indigo-400">디자인 실력</span>이 부족해서가 아닙니다.
            </h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-12">
              고객은 화려한 그래픽을 보러 오지 않습니다.<br />
              자신의 문제를 해결해줄 <span className="text-white font-bold underline underline-offset-8 decoration-indigo-500">논리적인 구조</span>를 찾고 있을 뿐입니다.
            </p>
            <div className="h-px w-24 bg-indigo-500 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* 4. Solution Explanation */}
      <section id="solution" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight font-display">
                트루폼은 고객의 심리를<br />
                철저하게 분석하여 설계합니다.
              </h2>
              <div className="space-y-8">
                {[
                  { 
                    title: "구매 흐름 설계", 
                    desc: "고객이 페이지에 들어와서 나갈 때까지의 심리 변화를 고려한 스토리텔링을 구성합니다.",
                    icon: <Layout className="w-6 h-6" />
                  },
                  { 
                    title: "트루폼 구조 분석", 
                    desc: "트루폼의 3초 점검 알고리즘을 통해 이탈이 발생할 수 있는 구간을 사전에 차단합니다.",
                    icon: <Search className="w-6 h-6" />
                  },
                  { 
                    title: "AI 활용 제작", 
                    desc: "최신 AI 기술을 활용해 고퀄리티의 이미지와 카피라이팅을 효율적으로 제작하여 비용을 낮췄습니다.",
                    icon: <Cpu className="w-6 h-6" />
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 font-display">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden relative border border-slate-200">
                {/* Background - Using a visual that represents landing page layouts with high saturation */}
                <img 
                  src="/images/detail01.jpg" 
                  alt="Analysis Process" 
                  className="w-full h-full object-cover opacity-70 grayscale-[60%]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://picsum.photos/seed/landing-page-layouts/800/800";
                  }}
                />
                
                {/* Scanning Line Animation - Adjusted for better visibility on bright background */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1.5 bg-indigo-600 shadow-[0_0_20px_rgba(79,70,229,1)] z-10"
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />

                {/* Subtle Overlay to ensure text readability while maintaining saturation */}
                <div className="absolute inset-0 bg-indigo-900/10" />
                
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-indigo-100 min-h-[140px] flex flex-col justify-center z-20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse" />
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-tighter">Trueform AI Analysis</span>
                  </div>
                  <motion.p 
                    key={analysisIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm md:text-base font-bold text-slate-900 leading-relaxed"
                  >
                    "{analysisResults[analysisIndex]}"
                  </motion.p>
                  
                  {/* Progress indicators */}
                  <div className="flex gap-1.5 mt-4">
                    {analysisResults.map((_, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "h-1.5 rounded-full transition-all duration-500",
                          i === analysisIndex ? "w-8 bg-indigo-600" : "w-2 bg-slate-200"
                        )} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process */}
      <section id="process" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">군더더기 없는 작업 프로세스</h2>
            <p className="text-slate-500">복잡한 절차는 빼고, 핵심에만 집중합니다.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-10" />
            {[
              { step: "01", title: "심층 분석", desc: "제품의 강점과 타겟 고객의 결핍을 분석합니다." },
              { step: "02", title: "구조 설계", desc: "구매 전환을 위한 논리적인 스토리보드를 짭니다." },
              { step: "03", title: "제작", desc: "AI와 전문가가 협업하여 상세페이지를 완성합니다." },
              { step: "04", title: "수정 및 완료", desc: "1회 무료 수정을 통해 최종 결과물을 전달합니다." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-indigo-500 font-bold text-sm mb-4 block">{item.step}</span>
                <h4 className="text-lg font-bold mb-3 font-display">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Portfolio Section */}
      <section id="portfolio" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">이미 증명된 결과물들</h2>
              <p className="text-slate-500">트루폼과 함께한 사장님들의 실제 상세페이지 예시입니다.</p>
            </div>
            <a href="#contact" className="text-indigo-600 font-bold flex items-center gap-1 hover:underline">
              전체 포트폴리오 요청하기 <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {portfolioItems.map((item) => (
              <motion.div 
                key={item.id} 
                className="group cursor-pointer flex flex-col items-center" 
                onClick={() => setSelectedPortfolio(item.id)}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Smartphone Frame - Scaled to 70% of column width with thinner borders */}
                <div className="relative w-[70%] aspect-[9/19] bg-slate-950 rounded-[2.5rem] p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[3px] border-slate-800 overflow-hidden mb-8">
                  {/* Speaker/Notch Area - Smaller and more subtle */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-950 rounded-b-xl z-30 flex items-center justify-center">
                    <div className="w-6 h-0.5 bg-slate-800 rounded-full" />
                  </div>
                  
                  {/* Screen Content */}
                  <div className="w-full h-full rounded-[2.2rem] overflow-hidden relative bg-white">
                    <div className="flex flex-col w-full transition-transform duration-1000 ease-out group-hover:scale-105 origin-top">
                      {item.images.slice(0, 3).map((img, idx) => {
                        const isVideo = img.toLowerCase().endsWith('.mp4');
                        if (isVideo) {
                          return (
                            <video
                              key={idx}
                              src={img}
                              autoPlay
                              muted
                              loop
                              playsInline
                              className="w-full h-auto block"
                            />
                          );
                        }
                        return (
                          <img 
                            key={idx}
                            src={img} 
                            alt={`${item.title} ${idx}`} 
                            className="w-full h-auto block"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              if (idx === 0) e.currentTarget.src = item.fallbackThumb;
                              else e.currentTarget.style.display = 'none';
                            }}
                          />
                        );
                      })}
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[3px] z-20">
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-xs shadow-2xl whitespace-nowrap"
                      >
                        자세히 보기
                      </motion.span>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-slate-800/10 rounded-full z-30" />
                </div>

                <div className="text-center">
                  <h4 className="font-bold text-xl mb-2 text-slate-900 font-display">{item.title}</h4>
                  <p className="text-sm font-medium text-indigo-600 bg-indigo-50 inline-block px-4 py-1.5 rounded-full border border-indigo-100">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Detail Modal */}
      {selectedPortfolio && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"
            onClick={() => setSelectedPortfolio(null)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-4xl h-full bg-white rounded-3xl overflow-hidden flex flex-col"
          >
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  {portfolioItems.find(p => p.id === selectedPortfolio)?.title}
                </h3>
                <p className="text-sm text-slate-500">전체 상세페이지 구조 보기</p>
              </div>
              <button 
                onClick={() => setSelectedPortfolio(null)}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <X className="w-6 h-6 text-slate-600" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50">
              <div className="max-w-2xl mx-auto space-y-0 shadow-2xl">
                {portfolioItems.find(p => p.id === selectedPortfolio)?.images.map((img, idx) => {
                  const isVideo = img.toLowerCase().endsWith('.mp4');
                  if (isVideo) {
                    return (
                      <video
                        key={idx}
                        src={img}
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                        className="w-full h-auto block"
                      />
                    );
                  }
                  return (
                    <img 
                      key={idx}
                      src={img} 
                      alt={`Detail ${idx + 1}`} 
                      className="w-full h-auto block"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // If it's the N사 item and images are missing, show placeholders
                        if (selectedPortfolio === 1) {
                          e.currentTarget.src = `https://picsum.photos/seed/detail-${idx}/800/1200`;
                        } else {
                          e.currentTarget.style.display = 'none';
                        }
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* 7. Service Info */}
      <section className="section-padding bg-indigo-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-indigo-900/5 border border-indigo-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 font-display">올인원 상세페이지 패키지</h2>
              <p className="text-slate-500">초보 사장님께 꼭 필요한 것만 담았습니다.</p>
            </div>
            <div className="space-y-6 mb-10">
              {[
                "트루폼 AI 기반 전환 구조 설계",
                "타겟 맞춤형 카피라이팅 재정리",
                "고화질 이미지 보정 및 합성",
                "모바일 최적화 레이아웃",
                "무료 수정 1회 포함"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-sm text-slate-400 line-through block">정가 550,000원</span>
                <span className="text-3xl font-bold text-slate-900 font-display">330,000원 <span className="text-sm font-normal text-slate-500 font-sans">(VAT 별도)</span></span>
              </div>
              <a href="#contact" className="w-full md:w-auto bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all text-center">
                지금 바로 시작하기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Consultation Form (CTA) */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">고민은 매출만 늦출 뿐입니다.</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                우리 제품에 맞는 구조가 무엇인지 궁금하신가요?<br />
                트루폼이 무료로 첫 진단을 도와드립니다.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">평균 만족도 4.9/5.0</p>
                    <p className="text-xs text-slate-500">100명 이상의 사장님이 선택했습니다.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <RefreshCw className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">빠른 피드백</p>
                    <p className="text-xs text-slate-500">문의 후 24시간 이내에 답변드립니다.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-2xl shadow-slate-200/50">
              {isFormSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 font-display">신청이 완료되었습니다!</h3>
                  <p className="text-slate-500">담당자가 확인 후 빠르게 연락드리겠습니다.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">성함 / 업체명</label>
                    <input 
                      {...register("name", { required: true })}
                      placeholder="홍길동 / 트루폼스토어" 
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all",
                        errors.name && "border-red-500"
                      )}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">연락처</label>
                    <input 
                      {...register("phone", { required: true })}
                      placeholder="010-0000-0000" 
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all",
                        errors.phone && "border-red-500"
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">이메일 주소</label>
                      <input 
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        placeholder="example@gmail.com" 
                        className={cn(
                          "w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all",
                          errors.email && "border-red-500"
                        )}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">카카오톡 ID (선택)</label>
                      <input 
                        {...register("kakaoId")}
                        placeholder="카카오톡 아이디" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">스토어 URL (선택)</label>
                    <input 
                      {...register("url")}
                      placeholder="https://smartstore.naver.com/..." 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">문의 내용</label>
                    <textarea 
                      {...register("message", { required: true })}
                      placeholder="제작하고 싶은 제품이나 현재 고민을 적어주세요." 
                      rows={4}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none",
                        errors.message && "border-red-500"
                      )}
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 flex items-center justify-center gap-2",
                      isSubmitting && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        신청 중...
                      </>
                    ) : (
                      "무료 진단 및 상담 신청하기"
                    )}
                  </button>
                  <p className="text-[10px] text-center text-slate-400">
                    개인정보는 상담 목적으로만 사용되며 안전하게 보호됩니다.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
              <TrendingUp className="text-white w-4 h-4" />
            </div>
            <span className="font-bold text-lg tracking-tight font-display">트루폼</span>
          </div>
          <div className="text-sm text-slate-400">
            © 2024 Trueform Studio. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-indigo-600">이용약관</a>
            <a href="#" className="hover:text-indigo-600">개인정보처리방침</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
