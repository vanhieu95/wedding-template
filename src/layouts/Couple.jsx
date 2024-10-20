import { Avatar, Box, Paper, Stack } from '@mui/material'
import { getImageUrl } from '@utils/imageHelper'

function Couple() {
  const brideUrl = getImageUrl('couple/bride.jpg')
  const groomUrl = getImageUrl('couple/groom.jpg')

  return (
    <Box
      className="mx-auto flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-12"
      direction="row"
    >
      <Box className="text-start">
        <h3 className="font-shantell text-xl font-bold">
          Nguyễn Lương Trung Hiếu
        </h3>
        <Paper
          elevation={24}
          className="p-4 max-w-md border-4 border-solid border-blue-300"
          square={false}
        >
          <Stack direction="row-reverse" spacing={2} alignItems={'center'}>
            <Avatar
              alt="Chú rể"
              src={groomUrl}
              sx={{ width: 180, height: 180 }}
              className="border-4 border-double border-gray-700 border-blue-200 shadow-md"
            />
            <div>
              Người con trai dễ thương, chăm chỉ. Ưu điểm là biết sợ vợ.
            </div>
          </Stack>
        </Paper>
      </Box>
      <Box className="text-end">
        <h3 className="font-shantell text-xl font-bold text-start md:text-end">
          Nguyễn Thị Thúy Vân
        </h3>
        <Paper
          elevation={24}
          className="p-4 max-w-md border-4 border-solid border-pink-300"
          square={false}
        >
          <Stack direction="row" spacing={2} alignItems={'center'}>
            <Avatar
              alt="Cô dâu"
              src={brideUrl}
              sx={{ width: 180, height: 180 }}
              className="border-4 border-double border-gray-700 border-pink-200 shadow-md"
            />
            <div>
              Người phụ nữ hiền dịu, biết thấu hiểu. Ưu điểm ăn nhiều nhưng
              không lên cân.
            </div>
          </Stack>
        </Paper>
      </Box>
    </Box>
  )
}

export default Couple
