import { useMemo, useState } from 'react'

interface IProps { }

type Asset = {
    id: number
    title: string
    category: 'Фигурки' | 'Декор' | 'Функционал' | 'Игрушки'
    price: number
    printTime: string
    material: string
    rating: number
    emoji: string
    gradient: string
}

const ASSETS: Asset[] = [
    { id: 1, title: 'Дракон-хранитель', category: 'Фигурки', price: 2400, printTime: '6ч 20м', material: 'PLA', rating: 4.9, emoji: '🐉', gradient: 'from-violet-500 to-fuchsia-500' },
    { id: 2, title: 'Ваза "Волна"', category: 'Декор', price: 1200, printTime: '4ч 10м', material: 'PETG', rating: 4.7, emoji: '🏺', gradient: 'from-sky-500 to-cyan-400' },
    { id: 3, title: 'Органайзер для стола', category: 'Функционал', price: 900, printTime: '3ч 05м', material: 'PLA', rating: 4.8, emoji: '🗂️', gradient: 'from-emerald-500 to-teal-400' },
    { id: 4, title: 'Кот-копилка', category: 'Игрушки', price: 1500, printTime: '5ч 00м', material: 'PLA', rating: 4.6, emoji: '🐱', gradient: 'from-amber-500 to-orange-400' },
    { id: 5, title: 'Лампа "Луна"', category: 'Декор', price: 3200, printTime: '8ч 40м', material: 'PLA+', rating: 5.0, emoji: '🌕', gradient: 'from-slate-400 to-slate-200' },
    { id: 6, title: 'Шестерёнка 20T', category: 'Функционал', price: 350, printTime: '1ч 15м', material: 'ABS', rating: 4.5, emoji: '⚙️', gradient: 'from-zinc-500 to-zinc-300' },
    { id: 7, title: 'Череп-подсвечник', category: 'Фигурки', price: 1800, printTime: '5ч 30м', material: 'PLA', rating: 4.8, emoji: '💀', gradient: 'from-rose-500 to-pink-400' },
    { id: 8, title: 'Робот-маскот', category: 'Игрушки', price: 2100, printTime: '7ч 00м', material: 'PETG', rating: 4.7, emoji: '🤖', gradient: 'from-indigo-500 to-blue-400' },
]

const CATEGORIES = ['Все', 'Фигурки', 'Декор', 'Функционал', 'Игрушки'] as const

const MarketPage = (_props: IProps) => {
    const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>('Все')
    const [query, setQuery] = useState('')

    const filtered = useMemo(() => {
        return ASSETS.filter((a) => {
            const byCat = activeCategory === 'Все' || a.category === activeCategory
            const byQuery = a.title.toLowerCase().includes(query.toLowerCase())
            return byCat && byQuery
        })
    }, [activeCategory, query])

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
            {/* HEADER */}
            <header className="sticky top-0 z-40 border-b border-white/5 bg-neutral-950/70 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <div className='flex gap-16 items-center'>
                        <div className="flex items-center gap-2 text-lg font-semibold">
                            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500">🖨️</span>
                            PrintForge
                        </div>
                        <nav className="hidden gap-8 text-sm text-neutral-400 md:flex">
                            <a className="transition hover:text-white" href="#catalog">Каталог</a>
                            <a className="transition hover:text-white" href="#how">Как это работает</a>
                            <a className="transition hover:text-white" href="#pricing">Цены</a>
                        </nav>
                    </div>
                    <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200">
                        Заказать печать
                    </button>
                </div>
            </header>

            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
                <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-neutral-300">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                        Готовые ассеты · Печать за 24 часа
                    </span>
                    <div className='flex w-full justify-center items-center flex-col'>
                        <h1 className="mx-auto mt-6 max-w-3xl  text-5xl font-bold  md:text-6xl  !text-neutral-400">
                            Закажи 3D-печать <br />
                            <span className="bg-gradient-to-r  from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                готовых моделей
                            </span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400">
                            Выбери ассет из каталога, мы напечатаем его на профессиональном принтере и доставим.
                            Никаких STL-файлов и возни с настройками.
                        </p>
                    </div>
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        <a href="#catalog" className="rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 font-medium transition hover:opacity-90">
                            Смотреть каталог
                        </a>
                        <a href="#how" className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium transition hover:bg-white/10">
                            Как это работает
                        </a>
                    </div>

                    <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4">
                        {[
                            { value: '120+', label: 'готовых моделей' },
                            { value: '24ч', label: 'средний срок' },
                            { value: '4.9★', label: 'рейтинг сервиса' },
                        ].map((s) => (
                            <div key={s.label} className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                                <div className="text-2xl font-bold md:text-3xl">{s.value}</div>
                                <div className="mt-1 text-xs text-neutral-400 md:text-sm">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CATALOG */}
            <section id="catalog" className="mx-auto max-w-7xl px-6 py-20">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Каталог ассетов</h2>
                        <p className="mt-2 text-neutral-400">Выбери модель — мы напечатаем и отправим</p>
                    </div>
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Поиск модели..."
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-neutral-500 focus:border-violet-500/50 focus:bg-white/10 md:w-72"
                    />
                </div>

                {/* Фильтры */}
                <div className="mt-8 flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`rounded-full px-4 py-2 text-sm transition ${activeCategory === cat
                                ? 'bg-white text-neutral-900'
                                : 'border border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                {filtered.length === 0 ? (
                    <div className="mt-16 text-center text-neutral-500">Ничего не найдено 🤷</div>
                ) : (
                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filtered.map((asset) => (
                            <article
                                key={asset.id}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] transition hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.06]"
                            >
                                {/* Превью */}
                                <div className={`relative grid h-44 place-items-center bg-gradient-to-br ${asset.gradient}`}>
                                    <span className="text-6xl drop-shadow-lg transition group-hover:scale-110">{asset.emoji}</span>
                                    <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                                        {asset.category}
                                    </span>
                                    <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                                        ★ {asset.rating}
                                    </span>
                                </div>

                                {/* Контент */}
                                <div className="flex flex-1 flex-col p-5">
                                    <h3 className="font-semibold">{asset.title}</h3>
                                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-neutral-400">
                                        <span>⏱ {asset.printTime}</span>
                                        <span>🧵 {asset.material}</span>
                                    </div>

                                    <div className="mt-auto flex items-center justify-between pt-5">
                                        <div className="text-lg font-bold">
                                            {asset.price.toLocaleString('ru-RU')} ₽
                                        </div>
                                        <button className="rounded-lg bg-white/10 px-3.5 py-2 text-sm font-medium transition group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-fuchsia-500">
                                            Заказать
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>

            {/* HOW IT WORKS */}
            <section id="how" className="border-t border-white/5 bg-white/[0.02] py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-center text-neutral-400! text-4xl! font-bold tracking-tight md:text-4xl">Как это работает</h2>
                    <div className="mt-14 grid gap-6 md:grid-cols-3">
                        {[
                            { n: '01', t: 'Выбери ассет', d: 'Открой каталог и найди нужную модель. Фильтруй по категории и материалу.' },
                            { n: '02', t: 'Оформи заказ', d: 'Укажи цвет, масштаб и количество. Мы рассчитаем точную стоимость.' },
                            { n: '03', t: 'Получи печать', d: 'Печатаем за 24 часа и доставляем курьером или в пункт выдачи.' },
                        ].map((step) => (
                            <div key={step.n} className="rounded-2xl border border-white/5 bg-white/[0.03] p-7">
                                <div className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-4xl font-bold text-transparent">
                                    {step.n}
                                </div>
                                <h3 className="mt-4 text-lg font-semibold">{step.t}</h3>
                                <p className="mt-2 text-sm text-neutral-400">{step.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 p-10 text-center md:p-16">
                    <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/30 blur-[100px]" />
                    <div className="relative flex flex-col justify-center items-center gap-4">
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-emerald-300!">Не нашли нужную модель?</h2>
                        <p className="mx-auto mt-4 max-w-lg text-neutral-300">
                            Загрузите свой STL-файл — мы напечатаем по вашим параметрам и подберём оптимальный материал.
                        </p>
                        <button className="mt-8 rounded-xl bg-white px-7 py-3 font-medium text-neutral-900 transition hover:bg-neutral-200">
                            Загрузить модель
                        </button>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-white/5 py-10">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-neutral-500 md:flex-row">
                    <div>© {new Date().getFullYear()} PrintForge. Все права защищены.</div>
                    <div className="flex gap-6">
                        <a className="transition hover:text-white" href="#">Telegram</a>
                        <a className="transition hover:text-white" href="#">Поддержка</a>
                        <a className="transition hover:text-white" href="#">Оферта</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default MarketPage