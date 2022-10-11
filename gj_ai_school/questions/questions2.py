def money(cost=10000,price=int(input("지불금액입력:"))):
        total =  cost - price
        num1 = total // 1000
        print(f"1000원짜리 지폐:{num1}장")
        num2 = total % num1 //100
        print(f"100원짜리 지폐:{num2}장")
        num3 = (total-((num1 * 1000)+(num2 * 100)))//10
        print(f"10원짜리 지폐:{num3}장")
        result = sum([num1,num2,num3])
        print(f"총 거스름돈 장수:{result}")

money()
