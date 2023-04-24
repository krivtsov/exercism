function sum_of_multiples(limit, factors)
    resVec = []
    for factor in factors
        if factor == 0
            continue
        end
        for cnt in 1:((limit -1) ÷ factor) 
            push!(resVec, cnt * factor)
        end
    end
    uniqueVec = Set(resVec)
    result = 0
    for elem in uniqueVec
        result += elem
    end
    result
end

