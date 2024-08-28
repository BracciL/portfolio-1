import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';
import fonts from '../../assets/fonts/gotham-book.woff2'
export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="78"
      height="58"
      viewBox="0 0 78 58"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <text
            x="5"
            y="45"
            className={styles.textStyle}
            font-size="50"
          >
            LB
          </text>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>


  );
});
