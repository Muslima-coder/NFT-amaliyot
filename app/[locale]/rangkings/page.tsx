import { SingleRangingType } from '@/@types/SingleRangingType'
import { Heading, Text } from '@/components'
import getRequest from '@/server/getRequest'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

const SingleRangkings = async () => {
  const { data }: { data: SingleRangingType[] } = await getRequest('/user?role=ARTIST')

  console.log(data)

  const t = await getTranslations("SingleRangkings")

  return (
    <section>
      <div className='containers py-[80px]'>
        <div className='mb-[40px]'>
          <Heading classList='!text-[51px] mb-[20px]'>{t("title")}</Heading>
          <Text classList='!text-[22px]'>{t("description")}</Text>
        </div>

        <div className='py-[14.5px] flex items-center justify-between mb-[30px] '>
          <Link href='/'><Text classList='!text-[22px] !text-[#858584] hover:!text-white duration-500'>{t("today")}</Text></Link>
          <Link href='/week'><Text classList='!text-[22px] !text-[#858584] hover:!text-white duration-500'>{t("week")}</Text></Link>
          <Link href='/month'><Text classList='!text-[22px] !text-[#858584] hover:!text-white duration-500'>{t("month")}</Text></Link>
          <Link href='/allTime'><Text classList='!text-[22px] !text-[#858584] hover:!text-white duration-500'>{t("allTime")}</Text></Link>
        </div>

        {/* Table contentii */}
        <div className='overflow-x-auto'>
          <table className='w-full border-separate border-spacing-y-[20px]'>
            <thead className='py-[12px]  border-[1px] border-[#3B3B3B] mb-[20px]'>
              <tr className='text-[#858584] !rounded-l-[20px]'>
                <th className='py-3 px-4 text-left font-normal'>#</th>
                <th className='py-3 px-4 text-left font-normal'>{t("artist")}</th>
                <th className='py-3 px-4 text-left font-normal'>{t("change")}</th>
                <th className='py-3 px-4 text-left font-normal'>{t("NFTsSold")}</th>
                <th className='py-3 px-4 text-left font-normal'>{t("volume")}</th>
              </tr>
            </thead>

            <tbody>
              {data.map((user, index) => (
                <tr  key={user.id} 
                  className='bg-[#3B3B3B] hover:bg-[#4B4B4B] cursor-pointer duration-300 !rounded-[20px]' >
                  <td className='py-4 px-4 text-white font-medium'>
                    <div className='w-[30px] h-[30px] bg-[#2B2B2B] rounded-full flex items-center justify-center text-[#858584]'>
                      {index + 1}
                    </div>
                  </td>

                  <td className='py-4 px-4'>
                    <div className='flex items-center gap-3'>
                      <img src={`${process.env.NEXT_PUBLIC_API}/file/${user.image}`} alt={user.username}className='w-[60px] h-[60px] rounded-full object-cover'/>
                      <span className='font-semibold text-white text-[16px]'>{user.username}</span>
                    </div>
                  </td>

                  <td className='py-4 px-4 text-[#00AC4F] font-medium'>+1.41%</td>
                  <td className='py-4 px-4 text-white font-medium'>602</td>
                  <td className='py-4 px-4 text-white font-medium'>12.4 ETH</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default SingleRangkings

