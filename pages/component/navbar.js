import React from 'react'

export default function navbar() {
  return (
    <>
      <div class="p-5 bg-gradient-to-tl from-indigo-600 to-gray-800 shadow md:flex md:items-center md:justify-between">

        <span class="text-3xl text-white cursor-pointer">
          HealTalk</span>
        <div class="flex space-x-16 items-center justify-end">
          <p class="text-xl leading-relaxed text-white text-opacity-70">Cek Riwayat</p>
          <p class="text-xl leading-relaxed text-white text-opacity-70">Cari RS</p>
          <p class="text-xl leading-relaxed text-white text-opacity-70">Konsultasi</p>
          <p class="text-xl leading-relaxed text-white text-opacity-70">Pembayaran</p>
        </div>

      </div>

    </>
  )
}
