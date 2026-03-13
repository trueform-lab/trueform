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
      title: "농수산물 C업체",
      desc: "구매 전환율 14% 상승",
      thumbnail: "/images/portfolio2_01.png",
      fallbackThumb: "https://picsum.photos/seed/portfolio-v-2/600/1500",
      images: [
        "/images/portfolio2_01.png",
        "/images/portfolio2_02.png",
        "/images/portfolio2_03.png",
        "/images/portfolio2_04.gif",
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
        "/images/portfolio2_20.png"
      ]
    },
    {
      id: 3,
      title: "화장품 C사",
      desc: "구매 전환율 21% 상승",
      thumbnail: "/images/portfolio3_01.png",
      fallbackThumb: "https://picsum.photos/seed/adulttoy-1/600/800",
      images: [
        "/images/portfolio3_01.png",
        "/images/portfolio3_02.gif",
        "/images/portfolio3_03.png",
        "/images/portfolio3_04.png",
        "/images/portfolio3_05.gif",
        "/images/portfolio3_06.png",
        "/images/portfolio3_07.png",
        "/images/portfolio3_08.png",
        "/images/portfolio3_09.png",
        "/images/portfolio3_10.png",
        "/images/portfolio3_11.png",
        "/images/portfolio3_12.png",
        "/images/portfolio3_13.png",
        "/images/portfolio3_14.png",
        "/images/portfolio3_15.gif",
        "/images/portfolio3_16.png",
        "/images/portfolio3_17.png",
        "/images/portfolio3_18.png",
        "/images/portfolio3_19.png"
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
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">T</span>
            </div>
            <span className="font-bold text-xl tracking-tight font-display text-slate-900">트루폼</span>
          </button>
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#problem" className="hover:text-indigo-600 transition-colors">고민</a>
              <a href="#solution" className="hover:text-indigo-600 transition-colors">해결책</a>
              <a href="#process" className="hover:text-indigo-600 transition-colors">프로세스</a>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <a href="#portfolio" className="bg-indigo-600 text-white px-3 py-1.5 md:px-4 md:py-1.5 text-xs md:text-sm rounded-full hover:bg-indigo-700 transition-all shadow-sm shadow-indigo-200 font-medium">
                포트폴리오
              </a>
              <a href="#pricing" className="bg-indigo-600 text-white px-3 py-1.5 md:px-4 md:py-1.5 text-xs md:text-sm rounded-full hover:bg-indigo-700 transition-all shadow-sm shadow-indigo-200 font-medium">
                가격 문의
              </a>
            </div>
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
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all group">
                제작 비용 확인하기
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
      <section id="portfolio" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-slate-900">이미 증명된 결과물들</h2>
              <p className="text-slate-500">트루폼과 함께한 사장님들의 실제 상세페이지 예시입니다.</p>
            </div>
            <a href="#pricing" className="text-indigo-600 font-bold flex items-center gap-1 hover:underline">
              전체 포트폴리오 요청하기 <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="flex flex-col gap-32">
            {portfolioItems.map((item) => (
              <motion.div 
                key={item.id} 
                className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                {/* Background Circle */}
                <div className="absolute right-0 md:right-[-5%] top-1/2 -translate-y-1/2 w-[120%] md:w-[65%] aspect-square bg-indigo-50/60 rounded-full z-0" />
                
                {/* Left Content */}
                <div className="w-full md:w-[40%] relative z-10 flex flex-col items-center md:items-start pl-0 md:pl-8 mb-16 md:mb-0">
                  <div className="mb-12 text-center md:text-left">
                    <div className="border-l-4 border-indigo-600 pl-5 py-1">
                      <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-indigo-600 font-medium">{item.desc}</p>
                    </div>
                  </div>
                  
                  {/* Phone Mockup */}
                  <div 
                    className="relative w-[240px] aspect-[9/19] bg-slate-900 rounded-[2.5rem] p-1.5 shadow-[20px_20px_40px_rgba(0,0,0,0.3)] border-[2px] border-slate-700 overflow-hidden z-20 md:ml-8 transform md:-rotate-2 cursor-pointer group"
                    onClick={() => setSelectedPortfolio(item.id)}
                  >
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-900 rounded-b-xl z-30 flex items-center justify-center">
                      <div className="w-6 h-0.5 bg-slate-800 rounded-full" />
                    </div>
                    {/* Screen */}
                    <div className="w-full h-full rounded-[2.2rem] overflow-hidden relative bg-white">
                      <div className="flex flex-col w-full h-full overflow-y-auto scrollbar-hide">
                        {item.images.length > 0 ? (
                          item.images.slice(0, 4).map((img, idx) => {
                            const isVideo = img.toLowerCase().endsWith('.mp4');
                            if (isVideo) {
                              return (
                                <video key={idx} src={img} autoPlay muted loop playsInline className="w-full h-auto block" />
                              );
                            }
                            return (
                              <img key={idx} src={img} alt="" className="w-full h-auto block" />
                            );
                          })
                        ) : (
                          <img src={item.fallbackThumb} alt="준비 중" className="w-full h-full object-cover block" />
                        )}
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[3px] z-20 pointer-events-none">
                        <span className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-xs shadow-2xl whitespace-nowrap">
                          자세히 보기
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Content: Two Strips */}
                <div 
                  className="w-full md:w-[60%] relative z-10 flex justify-center md:justify-end pr-0 md:pr-12 gap-4 h-[500px] md:h-[700px] cursor-pointer"
                  onClick={() => setSelectedPortfolio(item.id)}
                >
                  {/* Strip 1 */}
                  <div className="w-[45%] max-w-[280px] h-full overflow-hidden shadow-2xl bg-white rounded-sm transform translate-y-8">
                    <div className="flex flex-col w-full h-full overflow-y-auto scrollbar-hide">
                      {item.images.length > 0 ? (
                        item.images.filter((_, i) => i % 2 === 0).map((img, idx) => {
                          const isVideo = img.toLowerCase().endsWith('.mp4');
                          if (isVideo) {
                            return <video key={idx} src={img} autoPlay muted loop playsInline className="w-full h-auto block" />;
                          }
                          return <img key={idx} src={img} alt="" className="w-full h-auto block" />;
                        })
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-50 text-slate-400 text-sm">이미지 준비 중</div>
                      )}
                    </div>
                  </div>
                  {/* Strip 2 */}
                  <div className="w-[45%] max-w-[280px] h-full overflow-hidden shadow-2xl bg-white rounded-sm transform -translate-y-8">
                    <div className="flex flex-col w-full h-full overflow-y-auto scrollbar-hide">
                      {item.images.length > 0 ? (
                        item.images.filter((_, i) => i % 2 === 1).map((img, idx) => {
                          const isVideo = img.toLowerCase().endsWith('.mp4');
                          if (isVideo) {
                            return <video key={idx} src={img} autoPlay muted loop playsInline className="w-full h-auto block" />;
                          }
                          return <img key={idx} src={img} alt="" className="w-full h-auto block" />;
                        })
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-50 text-slate-400 text-sm">이미지 준비 중</div>
                      )}
                    </div>
                  </div>
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
              <div className="max-w-2xl mx-auto space-y-0 shadow-2xl bg-white min-h-[400px] flex flex-col">
                {portfolioItems.find(p => p.id === selectedPortfolio)?.images.length ? (
                  portfolioItems.find(p => p.id === selectedPortfolio)?.images.map((img, idx) => {
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
                          if (selectedPortfolio === 1) {
                            e.currentTarget.src = `https://picsum.photos/seed/detail-${idx}/800/1200`;
                          } else {
                            e.currentTarget.style.display = 'none';
                          }
                        }}
                      />
                    );
                  })
                ) : (
                  <div className="flex-1 flex items-center justify-center text-slate-400 p-12">
                    <p>상세 이미지가 준비 중입니다.</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* 7. Pricing & CTA Section (New Design) */}
      <section id="pricing" className="relative bg-slate-50 text-slate-900 py-20 overflow-hidden font-sans">
        {/* Background gradients */}
        <div className="absolute inset-0 pointer-events-none z-0" style={{
          background: `radial-gradient(ellipse 80% 40% at 50% -10%, rgba(79,70,229,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 30% at 90% 110%, rgba(79,70,229,0.05) 0%, transparent 60%)`
        }} />

        <div className="max-w-[700px] mx-auto px-5 relative z-10">
          {/* Header */}
          <header className="text-center pt-10 pb-11">
            <motion.div 
              initial={{ opacity: 0, y: -14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-bold text-[clamp(34px,8vw,50px)] text-slate-900 leading-[1.1] mb-[14px]">
                제작 비용 <em className="not-italic text-indigo-600">안내</em>
              </h2>
              <p className="text-[14.5px] text-slate-600 leading-[1.8]">
                팔리는 상세페이지, 합리적인 가격으로 시작하세요<br />
                모든 플랜에 빠른 소통과 꼼꼼한 수정이 포함됩니다
              </p>
            </motion.div>
          </header>

          {/* Divider */}
          <div className="flex items-center gap-3 my-7">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-[14px] text-slate-400">✦</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Pricing Grid */}
          <div className="flex flex-col gap-[14px] mb-[28px]">
            {/* Basic */}
            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white border-[1.5px] border-slate-200 rounded-[20px] p-[26px] md:p-[28px] relative overflow-hidden transition-all hover:-translate-y-[3px] hover:shadow-[0_14px_40px_rgba(79,70,229,0.08)] group"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-200" />
              <div className="flex flex-wrap md:flex-nowrap items-start justify-between mb-4 gap-2.5">
                <div className="flex items-center">
                  <div>
                    <div className="text-[17px] font-bold text-slate-900 mb-[3px]">베이직</div>
                    <div className="text-[12px] text-slate-500">처음 시작하는 분께 추천</div>
                  </div>
                </div>
                <div className="text-left md:text-right w-full md:w-auto mt-2 md:mt-0">
                  <span className="text-[11.5px] text-slate-400 line-through block mb-[2px]">&nbsp;</span>
                  <div className="font-display font-bold text-[26px] text-slate-900 leading-none">
                    10<span className="text-[13px] text-slate-500 font-normal">만원~</span>
                  </div>
                </div>
              </div>
              <ul className="flex flex-col gap-2 pt-4 border-t border-slate-100">
                {[
                  "상세페이지 1종 제작",
                  "스마트스토어 · 쿠팡 · 카카오쇼핑 최적화",
                  "무료 수정 1회 포함",
                  "납기 5~7일"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-[9px] text-[13.5px] text-slate-700">
                    <div className="w-[18px] h-[18px] rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-[10px] font-bold shrink-0">✓</div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Standard */}
            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-gradient-to-br from-white to-indigo-50/50 border-[1.5px] border-indigo-600 rounded-[20px] p-[26px] md:p-[28px] relative overflow-hidden transition-all hover:-translate-y-[3px] hover:shadow-[0_14px_40px_rgba(79,70,229,0.15)] group"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-800 to-indigo-500" />
              <div className="absolute top-[14px] right-[16px] text-[11px] font-bold px-[11px] py-[4px] rounded-full tracking-[0.04em] bg-indigo-600 text-white">인기</div>
              <div className="flex flex-wrap md:flex-nowrap items-start justify-between mb-4 gap-2.5">
                <div className="flex items-center">
                  <div>
                    <div className="text-[17px] font-bold text-slate-900 mb-[3px]">스탠다드</div>
                    <div className="text-[12px] text-slate-500">가장 많이 선택하는 플랜</div>
                  </div>
                </div>
                <div className="text-left md:text-right w-full md:w-auto mt-2 md:mt-0">
                  <span className="text-[11.5px] text-slate-400 line-through block mb-[2px]">&nbsp;</span>
                  <div className="font-display font-bold text-[26px] text-indigo-600 leading-none">
                    15<span className="text-[13px] text-slate-500 font-normal">만원~</span>
                  </div>
                </div>
              </div>
              <ul className="flex flex-col gap-2 pt-4 border-t border-indigo-100">
                {[
                  "상세페이지 1종 + 썸네일 이미지 포함",
                  "전 플랫폼 최적화 (자사몰 포함)",
                  "무료 수정 2회 포함",
                  "납기 5~7일",
                  "트렌드 분석 반영 디자인"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-[9px] text-[13.5px] text-slate-700">
                    <div className="w-[18px] h-[18px] rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold shrink-0">✓</div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* All-in-one */}
            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-gradient-to-br from-white to-amber-50/50 border-[1.5px] border-amber-500 rounded-[20px] p-[26px] md:p-[28px] relative overflow-hidden transition-all hover:-translate-y-[3px] hover:shadow-[0_14px_40px_rgba(245,158,11,0.15)] group"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-600 to-amber-400" />
              <div className="absolute top-[14px] right-[16px] text-[11px] font-bold px-[11px] py-[4px] rounded-full tracking-[0.04em] bg-amber-500 text-white">풀패키지</div>
              <div className="flex flex-wrap md:flex-nowrap items-start justify-between mb-4 gap-2.5">
                <div className="flex items-center">
                  <div>
                    <div className="text-[17px] font-bold text-slate-900 mb-[3px]">올인원 패키지</div>
                    <div className="text-[12px] text-slate-500">초보 사장님께 꼭 필요한 것만 담았습니다</div>
                  </div>
                </div>
                <div className="text-left md:text-right w-full md:w-auto mt-4 md:mt-0">
                  <span className="text-[11.5px] text-slate-400 line-through block mb-[2px]">&nbsp;</span>
                  <div className="font-display font-bold text-[26px] text-amber-500 leading-none flex items-baseline gap-2 justify-start md:justify-end">
                    <span className="text-[14px] text-slate-400 line-through font-normal">정가 55만원</span>
                    <span>33<span className="text-[13px] text-slate-500 font-normal">만원</span></span>
                  </div>
                </div>
              </div>
              <ul className="flex flex-col gap-2 pt-4 border-t border-amber-100">
                {[
                  "트루폼 AI 기반 전환 구조 설계",
                  "타겟 맞춤형 카피라이팅 재정리",
                  "고화질 이미지 보정 및 합성",
                  "모바일 최적화 레이아웃",
                  "무료 수정 3회 포함"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-[9px] text-[13.5px] text-slate-700">
                    <div className="w-[18px] h-[18px] rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-[10px] font-bold shrink-0">✓</div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Add-ons */}
          <motion.div 
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="bg-slate-100/50 border border-slate-200 rounded-[18px] p-[22px] md:p-[26px] mb-[20px]"
          >
            <div className="text-[13.5px] font-bold text-indigo-600 mb-[14px] flex items-center gap-[7px]">추가 옵션</div>
            <div className="flex flex-col gap-[10px]">
              {[
                { label: "썸네일 추가 제작 (1종)", price: "+2만원~" },
                { label: "빠른 납기 (3일 이내)", price: "+3만원~" },
                { label: "기존 페이지 리뉴얼", price: "별도 협의" },
                { label: "2종 이상 패키지", price: "10% 할인" }
              ].map((addon, i) => (
                <div key={i} className="flex justify-between items-center text-[13.5px]">
                  <div className="text-slate-700 flex items-center gap-[7px]">{addon.label}</div>
                  <div className="bg-white border border-slate-200 text-indigo-600 text-[12.5px] font-bold px-[11px] py-[3px] rounded-full">{addon.price}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Notice */}
          <motion.div 
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="bg-white border border-slate-200 rounded-2xl p-[20px] md:p-[24px] mb-[20px]"
          >
            <div className="text-[13.5px] font-bold text-indigo-600 mb-[10px] flex items-center gap-[7px]">안내사항</div>
            <ul className="flex flex-col gap-[7px]">
              {[
                "상품 정보 및 이미지는 고객님께서 제공해 주셔야 합니다",
                "상품 카테고리·복잡도에 따라 금액이 달라질 수 있습니다",
                "결제는 착수금 50% + 완료 후 잔금 50% 방식입니다",
                "수정 횟수 초과 시 건당 1만원 추가됩니다"
              ].map((notice, i) => (
                <li key={i} className="text-[12.5px] text-slate-500 pl-[14px] relative leading-[1.6]">
                  <span className="absolute left-0 text-indigo-500 font-bold">·</span>
                  {notice}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="max-w-2xl mx-auto pt-[40px] pb-[56px]"
          >
            <div className="text-left mb-10">
              <h3 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4 tracking-tight">고민은 매출만 늦출 뿐입니다.</h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-[15px]">
                우리 제품에 맞는 구조가 무엇인지 궁금하신가요?<br />
                트루폼이 무료로 첫 진단을 도와드립니다.
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="bg-white border border-slate-100 rounded-2xl p-5 flex gap-4 items-center shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-[14px] mb-1">평균 만족도 4.9/5.0</div>
                    <div className="text-[13px] text-slate-500">100명 이상의 사장님이 선택했습니다.</div>
                  </div>
                </div>
                
                <div className="bg-white border border-slate-100 rounded-2xl p-5 flex gap-4 items-center shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                    <RefreshCw className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-[14px] mb-1">빠른 피드백</div>
                    <div className="text-[13px] text-slate-500">문의 후 24시간 이내에 답변드립니다.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="https://litt.ly/jjangaya33" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-[8px] bg-indigo-600 text-white px-[38px] py-[16px] rounded-full text-[15px] font-bold tracking-[0.02em] transition-all hover:-translate-y-[2px] hover:bg-indigo-700 hover:shadow-[0_8px_32px_rgba(79,70,229,0.38)] shadow-[0_4px_24px_rgba(79,70,229,0.28)] w-full sm:w-auto">
                지금 바로 제작 문의하기
              </a>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
              <TrendingUp className="text-white w-4 h-4" />
            </div>
            <span className="font-bold text-lg tracking-tight font-display text-slate-900">트루폼</span>
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
