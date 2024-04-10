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
      .catch((err) => {
        setAlert('خطا در ارسال پیام')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Layout pageTitle="تماس با من">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            از طریق فرم زیر میتونید با من در ارتباط باشید. سعی می‌کنم در سریع‌ترین زمان پاسخگوی
            پیغام شما باشم :)
          </p>

          <form onSubmit={submitHandler} className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                نام شما
              </label>
              <input
                type="text"
                id="name"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                ایمیل
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:shadow-sm-light"
                placeholder="yourmail@mail.com"
                dir="ltr"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
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
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
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
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              {loading ? 'در حال ارسال...' : 'ارسال پیام'}
            </button>

            {alert && <p>{alert}</p>}
          </form>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="تماس با من" />

export default ContactPage
