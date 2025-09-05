# OTP Verification System

This document describes the OTP (One-Time Password) verification system implemented for the Golden Tag organization's account creation process.

## Overview

The OTP system provides secure account verification through email and phone number validation. It includes a multi-step registration process with OTP verification, password setup, and user account creation.

## Features

### ✅ Multi-Step Registration Process
1. **Basic Information Collection** - Name, email, phone, terms agreement
2. **OTP Verification** - 6-digit code sent to email and phone
3. **Password Setup** - Secure password creation with validation
4. **Success Confirmation** - Account creation completion

### ✅ Advanced OTP Features
- **Dual Channel Verification** - OTP sent to both email and phone
- **Timer Management** - 60-second countdown with resend functionality
- **Attempt Limiting** - Maximum 3 verification attempts
- **Auto-focus Input** - Seamless user experience
- **Paste Support** - Copy-paste OTP from messages
- **Real-time Validation** - Instant feedback on input

### ✅ Security Features
- **Session Storage** - Temporary OTP storage (demo purposes)
- **Input Sanitization** - Numeric-only OTP input
- **Attempt Tracking** - Prevents brute force attacks
- **Error Handling** - Comprehensive error management

## Components

### 1. OTPContext (`src/contexts/OTPContext.js`)
Centralized state management for OTP operations:
- OTP generation and sending
- Verification logic
- Timer management
- Attempt tracking
- Error handling

### 2. OTPInput (`src/components/OTPInput.jsx`)
Reusable OTP input component:
- 6-digit input fields
- Auto-focus navigation
- Paste support
- Visual feedback
- Error states

### 3. OTPVerification (`src/components/OTPVerification.jsx`)
Complete OTP verification interface:
- Email/phone display
- OTP input integration
- Timer and resend functionality
- Success/error states
- Animated feedback

### 4. Register Page (`src/app/register/register page.tsx`)
Updated registration flow:
- Step-by-step process
- OTP integration
- Password validation
- Success handling

## Usage

### Basic Implementation

```jsx
import { useOTP } from '../contexts/OTPContext';
import OTPVerification from '../components/OTPVerification';

function MyComponent() {
  const { sendOTP, verifyOTP, otpData } = useOTP();

  const handleSendOTP = async () => {
    const result = await sendOTP('user@example.com', '+97312345678');
    if (result.success) {
      console.log('OTP sent successfully');
    }
  };

  return (
    <OTPVerification
      email="user@example.com"
      phone="+97312345678"
      onVerified={(otp) => console.log('Verified:', otp)}
      onResend={() => console.log('OTP resent')}
    />
  );
}
```

### OTP Input Component

```jsx
import OTPInput from '../components/OTPInput';

function MyForm() {
  const [otp, setOtp] = useState('');

  return (
    <OTPInput
      length={6}
      value={otp}
      onChange={setOtp}
      onComplete={(value) => console.log('Complete:', value)}
      disabled={false}
      error={false}
    />
  );
}
```

## API Reference

### OTPContext Methods

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `sendOTP` | Send OTP to email and phone | `(email, phone)` | `{success: boolean, error?: string}` |
| `verifyOTP` | Verify entered OTP | `(otp)` | `{success: boolean, error?: string}` |
| `resendOTP` | Resend OTP | None | `{success: boolean, error?: string}` |
| `resetOTP` | Reset OTP state | None | `void` |
| `clearError` | Clear error messages | None | `void` |

### OTPContext State

| Property | Type | Description |
|----------|------|-------------|
| `otpData.isSent` | `boolean` | Whether OTP has been sent |
| `otpData.timer` | `number` | Countdown timer in seconds |
| `otpData.canResend` | `boolean` | Whether OTP can be resent |
| `otpData.attempts` | `number` | Number of verification attempts |
| `otpData.maxAttempts` | `number` | Maximum allowed attempts |
| `otpData.isVerified` | `boolean` | Whether OTP is verified |
| `loading` | `boolean` | Loading state |
| `error` | `string` | Error message |

## Demo Page

Visit `/otp-demo` to test the OTP system:
- Send OTP to test email/phone
- Verify OTP with interactive input
- Test OTP input component
- Experience complete flow

## Integration Steps

1. **Add OTPProvider to Layout**
   ```jsx
   import { OTPProvider } from '../contexts/OTPContext';
   
   // Wrap your app with OTPProvider
   <OTPProvider>
     {/* Your app components */}
   </OTPProvider>
   ```

2. **Use OTP Components**
   ```jsx
   import OTPVerification from '../components/OTPVerification';
   import { useOTP } from '../contexts/OTPContext';
   ```

3. **Handle OTP Events**
   ```jsx
   const handleOTPVerified = (otp) => {
     // Handle successful verification
     console.log('OTP verified:', otp);
   };
   ```

## Customization

### Styling
All components use Tailwind CSS classes and can be customized:
- Colors: Orange/yellow gradient theme
- Animations: Framer Motion animations
- Responsive: Mobile-first design

### Configuration
Modify OTP settings in `OTPContext.js`:
- Timer duration (default: 60 seconds)
- Max attempts (default: 3)
- OTP length (default: 6 digits)

## Security Considerations

⚠️ **Important**: This is a demo implementation. For production:

1. **Backend Integration**: Replace sessionStorage with secure backend API
2. **OTP Service**: Integrate with real email/SMS service (SendGrid, Twilio, etc.)
3. **Rate Limiting**: Implement server-side rate limiting
4. **Encryption**: Encrypt OTP data in transit and at rest
5. **Audit Logging**: Log all OTP operations for security monitoring

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Dependencies

- React 18+
- Next.js 13+
- Framer Motion
- Tailwind CSS

## File Structure

```
src/
├── contexts/
│   └── OTPContext.js          # OTP state management
├── components/
│   ├── OTPInput.jsx           # OTP input component
│   └── OTPVerification.jsx    # Complete OTP verification UI
├── app/
│   ├── register/
│   │   └── register page.tsx  # Updated registration page
│   └── otp-demo/
│       └── page.tsx           # Demo page
└── layout.tsx                 # Updated with OTPProvider
```

## Testing

The OTP system includes comprehensive testing capabilities:
- Interactive demo page at `/otp-demo`
- Console logging for debugging
- Error state testing
- Timer functionality testing
- Input validation testing

## Support

For questions or issues with the OTP system, please refer to:
- Component documentation in code comments
- Demo page for usage examples
- Console logs for debugging information

---

**Note**: This OTP system is designed for demonstration purposes. For production use, ensure proper backend integration and security measures are implemented.
