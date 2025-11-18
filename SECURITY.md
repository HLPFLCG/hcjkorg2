# Security Policy

## Security Overview

The HCJK Collection website takes security seriously and implements multiple layers of protection:

### 🔒 **Security Headers**
- **X-Frame-Options: DENY** - Prevents clickjacking attacks
- **X-Content-Type-Options: nosniff** - Prevents MIME type sniffing attacks
- **Referrer-Policy: origin-when-cross-origin** - Controls referrer information
- **Permissions-Policy** - Restricts access to device APIs
- **Content Security Policy** - Restricts resource loading to trusted sources

### 🛡️ **Content Security Policy**
```
default-src 'self'
script-src 'self' 'unsafe-eval' 'unsafe-inline' https://formspree.io https://cdn.jsdelivr.net
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
font-src 'self' https://fonts.gstatic.com
img-src 'self' data: blob: https:.
connect-src 'self' https://formspree.io
frame-src 'none'
object-src 'none'
base-uri 'self'
form-action 'self' https://formspree.io
frame-ancestors 'none'
upgrade-insecure-requests
```

### 🔍 **Form Security**
- **Formspree Integration**: Contact form uses Formspree's secure form handling
- **Input Validation**: Client-side validation for all form inputs
- **Rate Limiting**: Formspree provides built-in rate limiting
- **CSRF Protection**: Formspree handles CSRF tokens automatically

### 🚫 **Known Vulnerabilities**
- **glob package**: High severity vulnerability in TailwindCSS v3
  - **Impact**: Development build tools only (not production)
  - **Mitigation**: Vulnerability is in build tools, not runtime code
  - **Plan**: Upgrade to TailwindCSS v4 when compatible with project

### 📊 **Monitoring**
- **Error Boundaries**: React error boundaries catch and log runtime errors
- **Console Logging**: Proper error handling and logging in place
- **Performance Monitoring**: Core Web Vitals optimization

## Best Practices Implemented

### ✅ **Input Validation**
- All form inputs are validated client-side
- Email format validation
- Required field validation
- Sanitization before processing

### ✅ **Secure Dependencies**
- Regular security audits via `npm audit`
- Updated to latest stable versions
- Minimal external dependencies

### ✅ **Environment Security**
- No sensitive data in client-side code
- Environment variables for configuration
- Proper separation of dev/prod configs

### ✅ **Performance & Security**
- Image optimization to prevent DoS
- Lazy loading for better performance
- Efficient bundle size management

## Reporting Security Issues

If you discover a security vulnerability, please report it responsibly:

1. **Do not** create a public issue
2. **Email**: heather@hcjk.org
3. **Include**: Detailed description, steps to reproduce, impact assessment

## Compliance

- **GDPR**: Minimal data collection, cookie consent ready
- **WCAG 2.1**: Accessibility compliance in progress
- **HTTPS**: Enforced in production
- **Privacy Policy**: Available on contact page

## Version History

- **v1.0.0**: Initial security implementation
- **v1.1.0**: Added CSP headers and error boundaries
- **v1.2.0**: Updated Next.js for security patches
- **v1.3.0**: Enhanced form security and monitoring

---

*Last updated: November 2025*