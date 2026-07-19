import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { fetchLogin } from "@/store/modules/user.js"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
 
const formSchema = z.object({
   mobile: z.string().regex(/^1[3-9]\d{9}$/, {
    message: "Please enter a valid phone number.",
  }),
  code: z.string().min(6, {
    message: "Code must be at least 6 characters.",
  }),
})

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mobile: "",
      code: "",
    },
  })

async function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = {
      mobile: values.mobile,
      code: values.code,
    }

    console.log(values)
    try {
    const res = await dispatch(fetchLogin(payload));

    console.log("登录成功", res)

    // 登录成功跳转
    navigate("/")

  } catch (error) {
    console.log("登录失败", error)
  }
 

    // 这里可以处理登录逻辑，例如调用 API 等
    // 表单数据
  }

  return (
    <div className="min-h-screen flex items-center justify-center"> 
    <div className="w-full max-w-md space-y-6">
      <Form {...form} >
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-2 text-center">
            <h1 className="font-bold text-2xl">登录</h1>
            <p className="text-muted-foreground text-sm">
              请输入你的手机号和密码登录
            </p>
          </div>
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile</FormLabel>
                <FormControl>
                  <Input
                    className="bg-background"
                    placeholder="请输入手机号"
                    type="tel"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Code</FormLabel>
                  <a className="text-muted-foreground text-sm hover:underline" href="#">
                    Forgot code?
                  </a>
                </div>
                <FormControl>
                  <Input
                    className="bg-background"
                    placeholder="Enter your code"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            登录
          </Button>
          <p className="text-center text-muted-foreground text-sm">
            你还没有账号?{" "}
            <a className="hover:underline" href="#">
              注册
            </a>
          </p>
        </form>
      </Form>
    </div>
    </div>
  )
}

export default Login
