import React from 'react';

const colorSystem = {
  primary: {
    50: '#F0F7FF',
    100: '#E0EFFF',
    200: '#B8DBFF',
    300: '#7ABAFF',
    400: '#3399FF',
    500: '#0066CC',
    600: '#0052A3',
    700: '#003D7A',
    800: '#002952',
    900: '#001429'
  },
  accent: {
    50: '#E6FFF7',
    100: '#B3FFE6',
    200: '#80FFD4',
    300: '#4DFFC3',
    400: '#1AFFB2',
    500: '#00B894',
    600: '#009676',
    700: '#007359',
    800: '#00513B',
    900: '#002E1E'
  },
  gray: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A'
  }
};

const semanticColors = {
  background: { value: '#FFFFFF', usage: '기본 배경' },
  backgroundAlt: { value: '#F0F7FF', usage: '섹션 구분, 카드 배경' },
  primary: { value: '#0066CC', usage: '메인 버튼, 강조 텍스트, 링크' },
  secondary: { value: '#3399FF', usage: '보조 버튼, 아이콘, 호버 상태' },
  accent: { value: '#00B894', usage: '성공 상태, 강조 배지, CTA 포인트' },
  text: { value: '#1A1A2E', usage: '본문 텍스트, 제목' },
  textMuted: { value: '#5C6B7A', usage: '부가 설명, 레이블' },
  border: { value: '#D0E3F7', usage: '카드 테두리, 구분선' },
  error: { value: '#EF4444', usage: '에러 상태, 삭제 버튼' },
  warning: { value: '#F59E0B', usage: '경고 상태, 주의 메시지' },
  success: { value: '#00B894', usage: '성공 상태, 완료 표시' }
};

const ColorSwatch = ({ color, name, showHex = true }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <div style={{
      width: '48px',
      height: '48px',
      borderRadius: '8px',
      background: color,
      border: color === '#FFFFFF' ? '1px solid #E2E8F0' : 'none',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}/>
    <div>
      <div style={{ fontWeight: '600', color: '#1A1A2E', fontSize: '0.9rem' }}>{name}</div>
      {showHex && <code style={{ fontSize: '0.8rem', color: '#64748B' }}>{color}</code>}
    </div>
  </div>
);

const ColorScale = ({ name, colors }) => (
  <div style={{ marginBottom: '32px' }}>
    <h4 style={{ 
      fontSize: '1rem', 
      fontWeight: '700', 
      color: '#1A1A2E', 
      marginBottom: '12px',
      textTransform: 'capitalize'
    }}>
      {name}
    </h4>
    <div style={{ display: 'flex', gap: '4px' }}>
      {Object.entries(colors).map(([shade, color]) => (
        <div key={shade} style={{ textAlign: 'center' }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: color,
            borderRadius: '8px',
            marginBottom: '6px',
            border: shade === '50' ? '1px solid #E2E8F0' : 'none'
          }}/>
          <div style={{ fontSize: '0.7rem', fontWeight: '600', color: '#64748B' }}>{shade}</div>
          <div style={{ fontSize: '0.6rem', color: '#94A3B8', fontFamily: 'monospace' }}>{color}</div>
        </div>
      ))}
    </div>
  </div>
);

export default function OceanAzurePalette() {
  return (
    <div style={{
      fontFamily: "'Pretendard', 'Noto Sans KR', -apple-system, sans-serif",
      background: '#F8FAFC',
      minHeight: '100vh',
      padding: '40px'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          background: '#0066CC',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '32px',
          color: '#fff'
        }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '8px' }}>
            한국렌탈테크 — Ocean Azure
          </h1>
          <p style={{ opacity: 0.9 }}>Brand Color Palette Guide</p>
        </div>

        {/* Semantic Colors */}
        <div style={{
          background: '#fff',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '24px',
          border: '1px solid #E2E8F0'
        }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1A1A2E', marginBottom: '24px' }}>
            시맨틱 컬러 (Semantic Colors)
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px'
          }}>
            {Object.entries(semanticColors).map(([name, { value, usage }]) => (
              <div key={name} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px',
                background: '#F8FAFC',
                borderRadius: '10px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '10px',
                  background: value,
                  border: value === '#FFFFFF' ? '1px solid #E2E8F0' : 'none',
                  flexShrink: 0
                }}/>
                <div>
                  <div style={{ 
                    fontWeight: '600', 
                    color: '#1A1A2E', 
                    fontSize: '0.9rem',
                    marginBottom: '2px'
                  }}>
                    {name}
                  </div>
                  <code style={{ 
                    fontSize: '0.75rem', 
                    color: '#0066CC',
                    background: '#F0F7FF',
                    padding: '2px 6px',
                    borderRadius: '4px'
                  }}>
                    {value}
                  </code>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '4px' }}>
                    {usage}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Color Scales */}
        <div style={{
          background: '#fff',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '24px',
          border: '1px solid #E2E8F0'
        }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1A1A2E', marginBottom: '24px' }}>
            컬러 스케일 (Color Scales)
          </h3>
          
          <ColorScale name="Primary (Blue)" colors={colorSystem.primary} />
          <ColorScale name="Accent (Green)" colors={colorSystem.accent} />
          <ColorScale name="Gray (Neutral)" colors={colorSystem.gray} />
        </div>

        {/* Usage Examples */}
        <div style={{
          background: '#fff',
          borderRadius: '16px',
          padding: '32px',
          border: '1px solid #E2E8F0'
        }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1A1A2E', marginBottom: '24px' }}>
            사용 예시 (Usage Examples)
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Buttons */}
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#64748B', marginBottom: '12px' }}>
                버튼
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button style={{
                  background: '#0066CC',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  Primary Button
                </button>
                <button style={{
                  background: '#fff',
                  color: '#0066CC',
                  border: '1.5px solid #0066CC',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  Secondary Button
                </button>
                <button style={{
                  background: '#00B894',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  Accent Button
                </button>
                <button style={{
                  background: '#F0F7FF',
                  color: '#0066CC',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  Ghost Button
                </button>
              </div>
            </div>

            {/* Badges */}
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#64748B', marginBottom: '12px' }}>
                배지
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <span style={{
                  background: '#F0F7FF',
                  color: '#0066CC',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: '500'
                }}>
                  기본
                </span>
                <span style={{
                  background: '#E6FFF7',
                  color: '#00B894',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: '500'
                }}>
                  성공
                </span>
                <span style={{
                  background: '#FEF3C7',
                  color: '#D97706',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: '500'
                }}>
                  경고
                </span>
                <span style={{
                  background: '#FEE2E2',
                  color: '#DC2626',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: '500'
                }}>
                  에러
                </span>
              </div>
            </div>

            {/* Card Example */}
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#64748B', marginBottom: '12px' }}>
                카드
              </div>
              <div style={{
                background: '#fff',
                border: '1px solid #D0E3F7',
                borderRadius: '12px',
                padding: '20px',
                maxWidth: '300px'
              }}>
                <div style={{ 
                  fontSize: '1rem', 
                  fontWeight: '700', 
                  color: '#1A1A2E',
                  marginBottom: '8px'
                }}>
                  카드 제목
                </div>
                <div style={{ 
                  fontSize: '0.9rem', 
                  color: '#5C6B7A',
                  marginBottom: '16px',
                  lineHeight: 1.5
                }}>
                  카드 설명 텍스트입니다. textMuted 색상을 사용합니다.
                </div>
                <div style={{
                  background: '#F0F7FF',
                  padding: '12px',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  color: '#0066CC'
                }}>
                  backgroundAlt 영역
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
