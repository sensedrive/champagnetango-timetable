import type { ClassValue } from 'clsx'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

const cn = (...classLists: ClassValue[]) => twMerge(clsx(classLists))

export default cn
