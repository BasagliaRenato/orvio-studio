'use client'

import { useId, useRef, useState } from 'react'
import { useLanguage } from '@/components/providers/language-provider'
import { Arrow } from '@/components/site/arrow-link'
import { submitInquiry, type InquiryResult } from '@/lib/inquiry'
import { cn } from '@/lib/utils'

type Field = 'name' | 'email' | 'projectType' | 'message'
type Errors = Partial<Record<Field, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const MIN_MESSAGE = 20
const MAX_MESSAGE = 1200

export function ContactForm() {
  const { t, locale } = useLanguage()
  const f = t.form
  const uid = useId()
  const id = (name: string) => `${uid}-${name}`

  const [values, setValues] = useState({ name: '', email: '', company: '', projectType: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<InquiryResult | null>(null)
  const summaryRef = useRef<HTMLDivElement>(null)
  const resultRef = useRef<HTMLDivElement>(null)

  function validate(v = values): Errors {
    const next: Errors = {}
    if (!v.name.trim()) next.name = f.errors.nameRequired
    if (!v.email.trim()) next.email = f.errors.emailRequired
    else if (!EMAIL_RE.test(v.email.trim())) next.email = f.errors.emailInvalid
    if (!v.projectType) next.projectType = f.errors.typeRequired
    if (!v.message.trim()) next.message = f.errors.messageRequired
    else if (v.message.trim().length < MIN_MESSAGE) next.message = f.errors.messageShort
    return next
  }

  function update(field: keyof typeof values, value: string) {
    const next = { ...values, [field]: value }
    setValues(next)
    setResult(null)
    if (field in errors) {
      const fieldError = validate(next)[field as Field]
      setErrors((prev) => ({ ...prev, [field]: fieldError }))
    }
  }

  function blur(field: Field) {
    if (!values[field].trim()) return
    setErrors((prev) => ({ ...prev, [field]: validate()[field] }))
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const found = validate()
    setErrors(found)
    setResult(null)
    if (Object.values(found).some(Boolean)) {
      requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }
    setSubmitting(true)
    try {
      const res = await submitInquiry({ ...values, locale })
      setResult(res)
      if (res.status === 'sent') setValues({ name: '', email: '', company: '', projectType: '', message: '' })
    } catch {
      setResult({ status: 'error' })
    } finally {
      setSubmitting(false)
      requestAnimationFrame(() => resultRef.current?.focus())
    }
  }

  const errorList = (Object.entries(errors) as [Field, string | undefined][]).filter(([, e]) => e)
  const fieldTarget = (field: Field) => (field === 'projectType' ? id('type-0') : id(field))

  return (
    <form
      noValidate
      aria-label={t.contact.formLabel}
      onSubmit={onSubmit}
      className="flex flex-col gap-7 bg-ivory p-6 text-ink shadow-[0_30px_60px_-30px_rgba(8,16,80,0.6)] md:p-10"
    >
      <div className="flex flex-col gap-3 border border-ink/15 bg-ivory-deep p-4 sm:flex-row sm:items-start">
        <span className="font-meta shrink-0 self-start rounded-full bg-ink px-2.5 py-1 text-ivory">{f.demoBadge}</span>
        <p className="text-sm leading-relaxed text-ink-soft">{f.demoNotice}</p>
      </div>

      {errorList.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="border-l-2 border-[#b3261e] bg-[#b3261e]/[0.06] p-4 outline-none focus-visible:outline-2"
        >
          <p className="mb-2 font-medium">{f.errorSummary}</p>
          <ul className="flex flex-col gap-1 text-sm">
            {errorList.map(([field, message]) => (
              <li key={field}>
                <a href={`#${fieldTarget(field)}`} className="text-[#b3261e] underline underline-offset-2">
                  {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-7 sm:grid-cols-2">
        <TextField
          id={id('name')}
          label={f.name}
          value={values.name}
          error={errors.name}
          autoComplete="name"
          onChange={(v) => update('name', v)}
          onBlur={() => blur('name')}
          required
        />
        <TextField
          id={id('email')}
          label={f.email}
          type="email"
          inputMode="email"
          value={values.email}
          error={errors.email}
          autoComplete="email"
          onChange={(v) => update('email', v)}
          onBlur={() => blur('email')}
          required
        />
      </div>

      <TextField
        id={id('company')}
        label={f.company}
        hint={f.optional}
        value={values.company}
        autoComplete="organization"
        onChange={(v) => update('company', v)}
      />

      <fieldset aria-describedby={errors.projectType ? id('type-error') : undefined} aria-invalid={!!errors.projectType}>
        <legend className="mb-3 text-sm font-medium">
          {f.type} <span aria-hidden="true" className="text-cobalt">*</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {f.types.map((type, i) => {
            const checked = values.projectType === type
            return (
              <label
                key={type}
                className={cn(
                  'relative inline-flex min-h-11 cursor-pointer items-center rounded-full border px-4 text-sm transition-colors duration-300 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-cobalt',
                  checked ? 'border-ink bg-ink text-ivory' : 'border-ink/25 hover:border-ink',
                  errors.projectType && !checked && 'border-[#b3261e]/60',
                )}
              >
                <input
                  id={id(`type-${i}`)}
                  type="radio"
                  name={id('type')}
                  value={type}
                  checked={checked}
                  required
                  onChange={() => update('projectType', type)}
                  className="sr-only"
                />
                {type}
              </label>
            )
          })}
        </div>
        {errors.projectType && <FieldError id={id('type-error')} message={errors.projectType} />}
      </fieldset>

      <div className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between gap-4">
          <label htmlFor={id('message')} className="text-sm font-medium">
            {f.message} <span aria-hidden="true" className="text-cobalt">*</span>
          </label>
          <span className="font-meta text-ink-soft" aria-hidden="true">
            {values.message.length}/{MAX_MESSAGE}
          </span>
        </div>
        <textarea
          id={id('message')}
          rows={5}
          value={values.message}
          maxLength={MAX_MESSAGE}
          required
          aria-invalid={!!errors.message}
          aria-describedby={cn(id('message-hint'), errors.message && id('message-error'))}
          onChange={(e) => update('message', e.target.value)}
          onBlur={() => blur('message')}
          className={cn(
            'w-full resize-y border-b bg-transparent py-2 text-base leading-relaxed outline-none transition-colors placeholder:text-ink-soft/60 focus:border-cobalt',
            errors.message ? 'border-[#b3261e]' : 'border-ink/30',
          )}
        />
        <p id={id('message-hint')} className="text-sm text-ink-soft">
          {f.messageHint}
        </p>
        {errors.message && <FieldError id={id('message-error')} message={errors.message} />}
      </div>

      <div className="flex flex-col gap-4 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={submitting}
          aria-disabled={submitting}
          className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-ink px-6 text-ivory transition-colors duration-300 hover:bg-cobalt disabled:cursor-progress disabled:opacity-70"
        >
          {submitting ? f.submitting : f.submit}
          <Arrow className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
        </button>
      </div>

      <div ref={resultRef} tabIndex={-1} role="status" aria-live="polite" className="outline-none empty:hidden">
        {result && <ResultMessage result={result} />}
      </div>
    </form>
  )
}

function ResultMessage({ result }: { result: InquiryResult }) {
  const { t } = useLanguage()
  const f = t.form
  const content =
    result.status === 'sent'
      ? { title: f.sentTitle, body: f.sent, tone: 'border-cobalt bg-cobalt/[0.06]' }
      : result.status === 'not-configured'
        ? { title: f.demoResultTitle, body: f.demoResult, tone: 'border-ink bg-ivory-deep' }
        : { title: f.errorTitle, body: result.message ?? f.error, tone: 'border-[#b3261e] bg-[#b3261e]/[0.06]' }

  return (
    <div className={cn('border-l-2 p-4', content.tone)}>
      <p className="font-medium">{content.title}</p>
      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{content.body}</p>
    </div>
  )
}

function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <p id={id} className="mt-2 flex items-start gap-2 text-sm text-[#b3261e]">
      <svg viewBox="0 0 16 16" aria-hidden="true" className="mt-0.5 size-3.5 shrink-0">
        <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 4.5v4.5M8 11v.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      {message}
    </p>
  )
}

function TextField({
  id,
  label,
  hint,
  error,
  value,
  onChange,
  onBlur,
  required,
  type = 'text',
  ...rest
}: {
  id: string
  label: string
  hint?: string
  error?: string
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  required?: boolean
  type?: string
  autoComplete?: string
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode']
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}{' '}
        {required && (
          <span aria-hidden="true" className="text-cobalt">
            *
          </span>
        )}
        {hint && <span className="font-normal text-ink-soft">({hint})</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={cn(
          'h-11 w-full border-b bg-transparent text-base outline-none transition-colors focus:border-cobalt',
          error ? 'border-[#b3261e]' : 'border-ink/30',
        )}
        {...rest}
      />
      {error && <FieldError id={`${id}-error`} message={error} />}
    </div>
  )
}
