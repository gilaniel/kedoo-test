import * as React from 'react';

import { cn } from '@kedoo/shared/ui-shadcn';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { label?: string };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    const [isFocused, setFocused] = React.useState(false);
    return (
      <div
        className={cn(
          'relative text-[--kids-text-color-secondary] hover:text-[--kids-button-hover]',
          isFocused && 'text-[--kids-button-hover]'
        )}
      >
        {label && (
          <span className="absolute top-3 left-5 text-[10px] transition-colors uppercase">
            {label}
          </span>
        )}
        <input
          type={type}
          className={cn(
            'flex w-full rounded-[40px] border border-[--kids-text-color-secondary] bg-transparent px-5 pt-7 pb-3 text-[--kids-text-color-primary] transition-colors placeholder:text-[--kids-text-color-secondary] hover:border-[--kids-button-hover] focus-visible:outline-none focus-visible:border-[--kids-button-hover] disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
