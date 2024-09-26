import * as React from 'react'
import { useState } from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

import PocketBase from 'pocketbase'

const url = process.env.POCKETBASE_URL
const client = new PocketBase(url)

client.beforeSend = function (url, options: any) {
  options.headers['x_token'] = process.env.POCKETBASE_KEY

  return { url, options }
}

const ContactPage = () => {
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState('')

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    const { name, email, phone, message } = e.target as any

    const data = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    }

    setLoading(true)

    await client
      .collection('contacts')
      .create(data)
      .then(() => {
        setAlert('پیام شما با موفقیت ارسال شد')

        name.value = ''
        email.value = ''
        phone.value = ''
        message.value = ''
      })
      .catch(() => {
        setAlert('خطا در ارسال پیام')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Layout pageTitle="تماس با من">
      <div className="mx-auto max-w-screen-md">
        <p className="mb-6 lg:mb-10 text-center">
          از طریق فرم زیر میتونید با من در ارتباط باشید. سعی می‌کنم در سریع‌ترین زمان پاسخگوی پیغام
          شما باشم :)
        </p>

        <form onSubmit={submitHandler} className="space-y-8">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm ">
              نام شما
            </label>
            <input
              type="text"
              id="name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm ">
              ایمیل
            </label>
            <input
              type="email"
              id="email"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
              placeholder="you@email.com"
              dir="ltr"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm ">
              شماره همراه
            </label>
            <input
              type="text"
              id="phone"
              dir="ltr"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm">
              پیام شما
            </label>
            <textarea
              required
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
              placeholder="متن پیام خود را وارد کنید..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            {loading ? 'در حال ارسال...' : 'ارسال پیام'}
          </button>

          {alert && <p>{alert}</p>}
        </form>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="تماس با من" />

export default ContactPage
