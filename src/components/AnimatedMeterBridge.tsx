'use client';

import { useEffect, useRef, useState } from 'react';

interface MeterState {
  level: number;
  peakLevel: number;
  peakHoldTime: number;
  targetLevel: number;
}

const NUM_METERS = 16;
const NUM_SEGMENTS = 16;

export function AnimatedMeterBridge() {
  const [meters, setMeters] = useState<MeterState[]>(
    () => Array(NUM_METERS).fill(null).map(() => ({
      level: 0,
      peakLevel: 0,
      peakHoldTime: 0,
      targetLevel: 0,
    }))
  );

  const animationRef = useRef<number | undefined>(undefined);
  const lastUpdateRef = useRef<number>(0);

  // Generate smooth random target levels
  const updateTargetLevels = () => {
    setMeters(prev => prev.map((meter, i) => {
      // Create correlated levels between adjacent meters for more natural movement
      const time = Date.now() / 1000;
      const baseFreq = 0.5 + (i % 4) * 0.3;
      const secondaryFreq = 0.3 + (i % 3) * 0.2;
      
      // Combine sine waves for organic movement
      const wave1 = Math.sin(time * baseFreq + i * 0.5);
      const wave2 = Math.sin(time * secondaryFreq + i * 0.3) * 0.5;
      const wave3 = Math.sin(time * 1.7 + i * 0.7) * 0.25;
      
      const normalizedWave = (wave1 + wave2 + wave3) / 1.75;
      
      // Map to 0-1 range with some randomness
      const target = Math.max(0, Math.min(1, (normalizedWave + 1) / 2));
      
      return {
        ...meter,
        targetLevel: target,
      };
    }));
  };

  // Animate with VU-style ballistics
  const animate = () => {
    const now = Date.now();
    const delta = (now - lastUpdateRef.current) / 1000;
    lastUpdateRef.current = now;

    setMeters(prev => prev.map(meter => {
      // VU ballistics: fast attack (10ms), slow decay (1500ms)
      const attackRate = 0.3;
      const decayRate = 0.015;

      let newLevel: number;
      if (meter.targetLevel > meter.level) {
        // Attack - rise quickly
        newLevel = meter.level + (meter.targetLevel - meter.level) * attackRate;
      } else {
        // Decay - fall slowly
        newLevel = meter.level + (meter.targetLevel - meter.level) * decayRate;
      }

      // Peak hold logic
      let newPeakLevel = meter.peakLevel;
      let newPeakHoldTime = meter.peakHoldTime;

      if (newLevel > newPeakLevel) {
        newPeakLevel = newLevel;
        newPeakHoldTime = now;
      } else if (now - newPeakHoldTime > 2000) {
        // Peak hold for 2 seconds, then decay
        newPeakLevel -= 0.02;
        if (newPeakLevel < 0) newPeakLevel = 0;
      }

      return {
        ...meter,
        level: Math.max(0, Math.min(1, newLevel)),
        peakLevel: Math.max(0, Math.min(1, newPeakLevel)),
        peakHoldTime: newPeakHoldTime,
      };
    }));

    animationRef.current = requestAnimationFrame(animate);
  };

  // Update targets periodically
  useEffect(() => {
    const interval = setInterval(updateTargetLevels, 150);
    return () => clearInterval(interval);
  }, []);

  // Start animation loop
  useEffect(() => {
    lastUpdateRef.current = Date.now();
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const getSegmentColor = (index: number) => {
    if (index < 8) return 'bg-emerald-500'; // Green
    if (index < 12) return 'bg-yellow-500'; // Yellow
    if (index < 14) return 'bg-orange-500'; // Orange
    return 'bg-red-500'; // Red (peak)
  };

  const getGlowColor = (index: number) => {
    if (index < 8) return 'shadow-emerald-500/50';
    if (index < 12) return 'shadow-yellow-500/50';
    if (index < 14) return 'shadow-orange-500/50';
    return 'shadow-red-500/50';
  };

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-1.5 py-4">
      {meters.map((meter, meterIndex) => {
        const activeSegments = Math.round(meter.level * NUM_SEGMENTS);
        const activePeakSegment = Math.round(meter.peakLevel * NUM_SEGMENTS);

        return (
          <div
            key={meterIndex}
            className="relative flex flex-col gap-0.5 bg-slate-900/50 rounded-lg p-1.5 backdrop-blur-sm border border-slate-800/50"
            style={{
              boxShadow: `
                inset 0 1px 0 rgba(255,255,255,0.05),
                0 1px 3px rgba(0,0,0,0.3)
              `,
            }}
          >
            {/* LED segments */}
            <div className="flex flex-col-reverse gap-0.5">
              {Array.from({ length: NUM_SEGMENTS }).map((_, i) => {
                const isActive = i < activeSegments;
                const isPeak = i === activePeakSegment && meter.peakLevel > 0.01;
                const segmentIndex = NUM_SEGMENTS - 1 - i;

                return (
                  <div
                    key={i}
                    className={`
                      relative w-1.5 sm:w-2 h-2 sm:h-2.5 rounded-full transition-all duration-75
                      ${isActive ? getSegmentColor(segmentIndex) : 'bg-slate-800/60'}
                      ${isActive ? `shadow-[0_0_8px_currentColor] ${getGlowColor(segmentIndex)}` : ''}
                      ${isPeak && !isActive ? 'opacity-70' : ''}
                    `}
                    style={{
                      boxShadow: isActive ? `
                        0 0 4px currentColor,
                        0 0 8px currentColor,
                        inset 0 1px 0 rgba(255,255,255,0.3)
                      ` : undefined,
                    }}
                  >
                    {/* Glass reflection effect */}
                    {isActive && (
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
                        }}
                      />
                    )}
                    {/* Peak hold dot */}
                    {isPeak && (
                      <div
                        className={`absolute inset-0 rounded-full ${getSegmentColor(segmentIndex)} animate-pulse`}
                        style={{ animationDuration: '500ms' }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Meter label */}
            <div className="mt-1 text-[8px] sm:text-[10px] text-slate-600 font-mono text-center">
              {(meterIndex + 1).toString().padStart(2, '0')}
            </div>
          </div>
        );
      })}
    </div>
  );
}
