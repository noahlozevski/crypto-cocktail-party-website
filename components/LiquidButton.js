import styles from '@/styles/liquid-button.module.sass'

export default ({ children }) => (
  <>
    <button className={styles.button}>
      <span>{children}</span>
      <svg preserveAspectRatio="none" viewBox="0 0 132 45">
        <g clipPath="url(#clip)" filter="url(#goo-big)">
          <circle className={styles.topLeft} cx="49.5" cy="-0.5" r="26.5" />
          <circle className={styles.middleBottom} cx="70.5" cy="40.5" r="26.5" />
          <circle className={styles.topRight} cx="104" cy="6.5" r="27" />
          <circle className={styles.rightBottom} cx="123.5" cy="36.5" r="26.5" />
          <circle className={styles.leftBottom} cx="16.5" cy="28" r="30" />
        </g>
        <defs>
          <clipPath id="clip">
            <rect width="132" height="45" rx="7" />
          </clipPath>
        </defs>
      </svg>

      <svg width="0" height="0">
          <defs>
              <filter id="goo-big" x="-50%" width="200%" y="-50%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
              </filter>
          </defs>
      </svg>

    </button>
  </>
)
