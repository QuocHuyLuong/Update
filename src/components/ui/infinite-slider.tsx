'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, motion, useAnimationFrame } from 'framer-motion';
import { useState } from 'react';
import useMeasure from 'react-use-measure';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number; // Tính bằng pixel/giây (Thay thế cho duration)
  speedOnHover?: number; // Tốc độ khi hover (Ví dụ: chậm lại để dễ đọc)
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 50, // Mặc định chạy 50px mỗi giây
  speedOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  // Chỉ đo kích thước của 1 block children thay vì toàn bộ để tính toán chính xác
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  useAnimationFrame((t, delta) => {
    const size = direction === 'horizontal' ? width : height;
    if (!size) return;

    // Tính toán tốc độ hiện tại dựa trên trạng thái hover
    const currentSpeed = isHovered && speedOnHover !== undefined ? speedOnHover : speed;
    
    // Quãng đường di chuyển trong frame này
    let moveBy = (currentSpeed * delta) / 1000;

    if (reverse) {
      moveBy = -moveBy;
    }

    let newValue = translation.get() - moveBy;
    
    // Điểm reset (Độ dài của 1 set children + gap)
    const loopPoint = size + gap;

    // Logic lặp lại vô tận mà không bị giật
    if (reverse) {
      if (newValue >= 0) {
        newValue = -loopPoint;
      }
    } else {
      if (newValue <= -loopPoint) {
        newValue = 0;
      }
    }

    translation.set(newValue);
  });

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === 'horizontal' ? { x: translation } : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Set 1: Nơi được gắn ref để đo kích thước chuẩn */}
        <div
          ref={ref}
          className="flex shrink-0"
          style={{
            gap: `${gap}px`,
            flexDirection: direction === 'horizontal' ? 'row' : 'column',
          }}
        >
          {children}
        </div>
        
        {/* Set 2: Bản sao để tạo hiệu ứng vô tận */}
        <div
          className="flex shrink-0"
          style={{
            gap: `${gap}px`,
            flexDirection: direction === 'horizontal' ? 'row' : 'column',
          }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}