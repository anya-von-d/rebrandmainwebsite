import { useEffect, useState, useMemo } from 'react';

interface BinaryRowProps {
  delay: number;
  speed: number;
  maxLength: number;
  yPosition: number;
}

function BinaryRow({ delay, speed, maxLength, yPosition }: BinaryRowProps) {
  const [displayedBinary, setDisplayedBinary] = useState('');
  
  const fullBinary = useMemo(() => {
    let binary = '';
    for (let i = 0; i < maxLength; i++) {
      binary += Math.random() > 0.5 ? '1' : '0';
      if (Math.random() > 0.7) binary += ' ';
    }
    return binary;
  }, [maxLength]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= fullBinary.length) {
          setDisplayedBinary(fullBinary.substring(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, speed);
      
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [fullBinary, delay, speed]);

  return (
    <div 
      className="absolute whitespace-nowrap font-mono text-xs text-[#00D97E]/15 select-none pointer-events-none"
      style={{ top: `${yPosition}%` }}
    >
      {displayedBinary}
      <span className="inline-block w-0.5 h-3 bg-[#00A86B]/25 ml-0.5 animate-pulse" />
    </div>
  );
}

export default function BinaryBackground() {
  const rows = useMemo(() => {
    const rowData = [];
    const numRows = 12;
    
    for (let i = 0; i < numRows; i++) {
      rowData.push({
        id: i,
        delay: i * 300 + Math.random() * 500,
        speed: 30 + Math.random() * 40,
        maxLength: 40 + Math.floor(Math.random() * 30),
        yPosition: (i / numRows) * 100 + 5,
      });
    }
    return rowData;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {rows.map((row) => (
        <BinaryRow
          key={row.id}
          delay={row.delay}
          speed={row.speed}
          maxLength={row.maxLength}
          yPosition={row.yPosition}
        />
      ))}
    </div>
  );
}
