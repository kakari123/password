import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import './App.css'

function App() {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [result, setResult] = useState('')

  const formatDate = () => {
    if (day && month && year) {
      // Pad day and month with leading zeros if needed
      const paddedDay = day.padStart(2, '0')
      const paddedMonth = month.padStart(2, '0')
      
      // Format as DDMMYYYY
      const formatted = `${paddedDay}${paddedMonth}${year}`
      setResult(formatted)
    } else {
      setResult('تکایە هەموو خانەکان پڕ بکەرەوە') // Please fill all fields
    }
  }

  const handleDayChange = (e) => {
    const value = e.target.value
    if (value === '' || (parseInt(value) >= 1 && parseInt(value) <= 31)) {
      setDay(value)
    }
  }

  const handleMonthChange = (e) => {
    const value = e.target.value
    if (value === '' || (parseInt(value) >= 1 && parseInt(value) <= 12)) {
      setMonth(value)
    }
  }

  const handleYearChange = (e) => {
    const value = e.target.value
    // Allow empty string or valid year numbers (1-4 digits)
    if (value === '' || (/^\d{1,4}$/.test(value) && parseInt(value) <= 2100)) {
      setYear(value)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8">
        {/* Large Header */}
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4 tracking-wide">
            ARI AHMED ISMAHIL
          </h1>
          <p className="text-xl text-gray-600">Date Formatter</p>
        </div>

        {/* Date Picker Card */}
        <Card className="w-full shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-700">
              بەروار هەڵبژێرە (Select Date)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Date Input Fields */}
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="day" className="text-lg font-medium">
                  ڕۆژ (Day)
                </Label>
                <Input
                  id="day"
                  type="number"
                  placeholder="DD"
                  value={day}
                  onChange={handleDayChange}
                  min="1"
                  max="31"
                  className="text-center text-lg h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="month" className="text-lg font-medium">
                  مانگ (Month)
                </Label>
                <Input
                  id="month"
                  type="number"
                  placeholder="MM"
                  value={month}
                  onChange={handleMonthChange}
                  min="1"
                  max="12"
                  className="text-center text-lg h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year" className="text-lg font-medium">
                  ساڵ (Year)
                </Label>
                <Input
                  id="year"
                  type="number"
                  placeholder="YYYY"
                  value={year}
                  onChange={handleYearChange}
                  min="1900"
                  max="2100"
                  className="text-center text-lg h-12"
                />
              </div>
            </div>

            {/* Format Button */}
            <div className="text-center">
              <Button 
                onClick={formatDate}
                className="px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                فۆرمات بکە (Format Date)
              </Button>
            </div>

            {/* Result Display */}
            {result && (
              <div className="mt-6 p-6 bg-gray-50 rounded-lg border-2 border-gray-200">
                <h3 className="text-lg font-medium text-gray-700 mb-2 text-center">
                  ئەنجام (Result):
                </h3>
                <div className="text-center">
                  <span className="text-3xl font-bold text-blue-600 font-mono">
                    {result}
                  </span>
                </div>
              </div>
            )}

            {/* Example */}
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-gray-600 text-center">
                <strong>نموونە (Example):</strong> ئەگەر 2/3/2005 هەڵبژێریت، ئەنجامەکە دەبێتە: 02032005
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App

